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
  public staffList:FormGroup;
  selectedOffice: Office;
  newArray: any;

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

  createFormGroup() {
    this.editOfficeProfileForm = this.fb.group({
      companyName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      officeCapacity: [0, Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      colourScheme: [''],
      staff: []
    });
    this.userForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
    });
  }
  get getStaff(): FormArray {
    return this.editOfficeProfileForm.get["users"] as FormArray;
  }

  public addUser() {
    this.newUser = this.userForm.value;
    let newArray = [];
    this.currentStaffList.push(...newArray, this.newUser);
    this.editOfficeProfileForm.controls["users"].patchValue(this.currentStaffList);
    console.log('Staff list ', this.editOfficeProfileForm);
  }

  public retrieveData($event) {
    console.log('what is in here', $event);
  }  

  // newSkill(): FormGroup {
  //   return this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     avatar: [''],
  //   })
  // }


  //   const modalReff = this.modalService.open(GenericModalComponent, {size: 'sm'});
  //   const componentInstance = modalReff.componentInstance as GenericModalComponent;
  // ({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   avatar: [''],
  //   componentInstance.title = 'Add User';
    // const userForm = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   avatar: [''],
    // });

    // this.currentStaffList.push(this.staff.value);
//     console.log('Staff in? ', this.editOfficeProfileForm);
// }

deleteUser(lessonIndex: number) {
  // this.staff.removeAt(lessonIndex);
}

  public colourSelected(colour) {
  this.colourHash = colour;
  this.editOfficeProfileForm.patchValue({
    colourScheme: colour
  });
  console.log('details', this.colourHash);
}

  public setColour(colorHash: string) {


}

  public getOfficeInfo(): void {
  this.officeService.getOfficeById(this.officeId).subscribe((formData) => {
    this.editOffice(formData);
    this.colourHash = this.editOfficeProfileForm.controls['colourScheme'].value;
    console.log('this should be one office ', this.colourHash);
    console.log('this should be one office  form value', this.editOfficeProfileForm.controls['colourScheme'].value);
    console.log('this should be one office ', this.colourHash);
  })
}

  public editOffice(office: Office) {
  console.log('EDIT OFFICE IN QUESTION ',office);
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
    users: editOffice.users,
  })
  // this.onSubmit();
  // this.editOfficeProfileForm.controls['companyName'].setValue = office.companyName;
}

  public deleteOffice() {
  this.officeService.deleteOffice(this.officeId).subscribe((data) => {
    console.log('resonse', data);
    this.router.navigateByUrl('');
  }),
    (error) => {
      console.log(error)
    }
}

  public onSubmit() {
  console.log(this.editOfficeProfileForm)
  // this.editOfficeProfileForm.controls['staff'] = [...this.currentStaffList];
  if (this.editOfficeProfileForm.valid) {
    this.officeService.updateOffice(this.editOfficeProfileForm.value, this.officeId).subscribe((data) => {
      console.log('speak to me ', data);
      this.router.navigate(['/']);
    }),
      (err) => console.log(err);
  }
}

}
