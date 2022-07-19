import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Office } from 'src/app/modals/office.modal';
import { User } from 'src/app/modals/staff.modal';
import { OfficeServices } from 'src/app/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.css']
})
export class EditOfficeComponent implements OnInit {

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
    private modalService: NgbModal
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

  createFormGroup() :void {
    this.editOfficeProfileForm = this.fb.group({
      companyName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      officeCapacity: [0, Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      colourScheme: [''],
      staff: [],
    });
    this.userForm = this.fb.group({
      _id: new FormControl('', [Validators.required]),
      checked: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
    });
  }
  get getStaff(): FormArray {
    return this.editOfficeProfileForm.get["users"] as FormArray;
  }

  public addUser() :void {
    this.newUser = this.userForm.value;
    let newArray = [];
    this.currentStaffList.push(...newArray, this.newUser);
    this.userForm.controls["users"].patchValue(this.currentStaffList);
    console.log('Staff list ', this.editOfficeProfileForm);
  }

  public retrieveData(users: User[]): void {
    this.selectedUsers = users;
  }

  public deleteUser(lessonIndex: number): void {
    // TODO
  }

  public colourSelected(colour) :void {
    this.colourHash = colour;
    this.editOfficeProfileForm.patchValue({
      colourScheme: colour
    });
    console.log('details', this.colourHash);
  }

  public getOfficeInfo(): void {
    this.officeService.getOfficeById(this.officeId).subscribe((formData) => {
      this.editOffice(formData);
      this.colourHash = this.editOfficeProfileForm.controls['colourScheme'].value;
    })
  }

  public editOffice(office: Office) :void{
    this.colourHash = office.colourScheme;
    const editOffice = office[0];
    this.editOfficeProfileForm.patchValue({
      companyName: editOffice.companyName,
      phoneNumber: editOffice.phoneNumber,
      officeCapacity: editOffice.officeCapacity,
      address: editOffice.address,
      email: editOffice.email,
      colourScheme: editOffice.colourScheme,
      staff: editOffice.staff,
      // users: editOffice.users,
    })
  }

  public deleteOffice(): void {
    this.officeService.deleteOffice(this.officeId).subscribe((data) => {
      this.router.navigateByUrl('');
    }),
      (error) => {
        console.log(error)
      }
  }

  public onSubmit(): void {
    console.log('VALID', this.editOfficeProfileForm.valid)
    if (this.editOfficeProfileForm.valid) {
      this.officeService.updateOffice(this.editOfficeProfileForm.value, this.officeId).subscribe((data) => {
        this.router.navigate(['/']);
      }),
        (err) => console.log(err);
    }
  }
}
