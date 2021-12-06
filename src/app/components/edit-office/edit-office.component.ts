import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Office } from 'src/app/modals/office.modal';
import { OfficeServices } from 'src/app/service.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.css']
})
export class EditOfficeComponent implements OnInit {
  public editOfficeProfileForm: FormGroup;
  public officeId: string;
  selectedOffice: Office;

  constructor(private officeService: OfficeServices, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((room) => {
      const id = room.roomId;
      this.officeId = id;
      if(this.officeId){
        console.log('this roomId' , this.officeId);
        this.getOfficeInfo();
      }
    }),
    () => {

    }
    this.createFormGroup();
  }

  createFormGroup() {
    this.editOfficeProfileForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      officeCapacity: [0, Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      staff: [''],
    });

  }

  public getOfficeInfo(): void {
    this.officeService.getOfficeById(this.officeId).subscribe((formData) => {
      this.editOffice(formData);
      // this.editOfficeProfileForm = formData.value;
      console.log('this should be one office ', this.editOfficeProfileForm);

    })
  }

  public editOffice(office:Office){
    console.log('what is here ? ',  office);
    // this.editOfficeProfileForm.patchValue({
    //   companyName: office.companyName,
    //   phoneNumber: office.phoneNumber,
    //   officeCapacity: office.officeCapacity,
    //   address: office.address,
    //   email: office.email,
    // })
    // this.editOfficeProfileForm.controls['companyName'].setValue = office.companyName;
  }

  public onSubmit() {
    if (this.editOfficeProfileForm.valid) {
      this.officeService.addOffice(this.editOfficeProfileForm.value).subscribe((data) => {

      }),
        (err) => console.log(err);
    }
  }

}
