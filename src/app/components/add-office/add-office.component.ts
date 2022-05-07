import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/modals/staff.modal';
import { OfficeServices } from 'src/app/service.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  public officeProfileForm: FormGroup;
  public userForm: FormGroup;

  public currentStaffList: User[] = [];
  public newUser: User;

  constructor(private officeService: OfficeServices, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.officeProfileForm = this.fb.group({
      companyName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      officeCapacity: [0, Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      colourScheme: [''],
      users: []
    });
    this.userForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      avatar: new FormControl('', [Validators.required]),
    });

  }

  public colourSelected(colour: string) {
    this.officeProfileForm.patchValue({
      colourScheme: colour
    });
  }
  
  public addUser() {
    this.newUser = this.userForm.value;
    let newArray = [];
    this.currentStaffList.push(...newArray, this.newUser);
    this.officeProfileForm.controls["users"].patchValue(this.currentStaffList);
    console.log('Staff list ', this.officeProfileForm);
  }

  public onSubmit() {
    console.log('details', this.officeProfileForm);

    if (this.officeProfileForm.valid) {
      this.officeService.addOffice(this.officeProfileForm.value).subscribe((data) => {

      }),
        (err) => console.log(err);
    }
  }

}
