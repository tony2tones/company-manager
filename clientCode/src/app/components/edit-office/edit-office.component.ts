import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Office } from 'src/app/modals/office.modal';
import { User } from 'src/app/modals/user.modal';
import { OfficeServices } from 'src/app/service.service';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.css']
})
export class EditOfficeComponent implements OnInit {

  public showUsersList:boolean = false;

  public buttonStatus: boolean = false;

  public editOfficeProfileForm: FormGroup;

  public userForm: FormGroup;

  public officeId: string;

  public colourHash: string;

  public staff: FormGroup;

  public currentStaffList: User[] = [];

  public newUser: User;

  public staffList: FormGroup;

  public selectedOffice: Office;

  public selectedUsers: User[] = [];

  constructor(
    private officeService: OfficeServices,
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((room) => {
      const id = room.roomId;
      this.officeId = id;
      if (this.officeId) {
        this.getOfficeInfo();
      }
    }),
      () => {

      }
    this.createFormGroup();
  }

  createFormGroup(): void {
    this.editOfficeProfileForm = this.fb.group({
      companyName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      officeCapacity: [0, Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      colourScheme: [''],
      users: [],
    });
  }
  get getStaff(): FormArray {
    return this.editOfficeProfileForm.get["users"] as FormArray;
  }

  public addUsers(): void {
    this.showUsersList = !this.showUsersList;
    this.buttonStatus = true;

  }

  public retrieveData(users: User[]): void {
    this.selectedUsers = users;
    this.buttonStatus = false;
  }

  public deleteUser(lessonIndex: number): void {
    // TODO
  }

  public colourSelected(colour): void {
    this.colourHash = colour;
    this.editOfficeProfileForm.patchValue({
      colourScheme: colour
    });
  }

  public getOfficeInfo(): void {
    this.officeService.getOfficeById(this.officeId).subscribe((editOfficeData:Office) => {
      this.editOffice(editOfficeData);
      this.colourHash = this.editOfficeProfileForm.controls['colourScheme'].value;
    })
  }

  public usersAdded($event) {
    this.buttonStatus = false;
  }

  public editOffice(office: Office): void {
    this.colourHash = office.colourScheme;
    const usersList = office[0].users; 
    const editOffice = office[0];
    this.selectedUsers = usersList;
    this.editOfficeProfileForm.patchValue({
      companyName: editOffice.companyName,
      phoneNumber: editOffice.phoneNumber,
      officeCapacity: editOffice.officeCapacity,
      address: editOffice.address,
      email: editOffice.email,
      colourScheme: editOffice.colourScheme,
    })
  }

  public deleteOffice(): void {
    this.officeService.deleteOffice(this.officeId).subscribe(() => {
      this.router.navigateByUrl('');
    }),
      (error) => {
        console.log(error)
      }
  }

  public onSubmit(): void {
    this.selectedOffice = this.editOfficeProfileForm.value;
    this.selectedOffice.users = this.selectedUsers;
    console.log(this.selectedOffice);
    if (this.editOfficeProfileForm.valid) {
      this.officeService.updateOffice(this.selectedOffice, this.officeId).subscribe(() => {
        this.router.navigate(['/']);
      }),
        (err) => console.log(err);
    }
  }
}
