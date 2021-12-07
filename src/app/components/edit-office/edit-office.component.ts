import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private officeService: OfficeServices,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
    ) { }

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
    const editOffice = office[0];
    this.editOfficeProfileForm.patchValue({
      companyName: editOffice.companyName,
      phoneNumber: editOffice.phoneNumber,
      officeCapacity: editOffice.officeCapacity,
      address: editOffice.address,
      email: editOffice.email,
    })
    // this.editOfficeProfileForm.controls['companyName'].setValue = office.companyName;
  }

  public deleteOffice() {
    this.officeService.deleteOffice(this.officeId).subscribe((data) => {
      console.log('resonse', data);
    }),
    (error) => {
      console.log(error)
    }
  }

  public onSubmit() {
    if (this.editOfficeProfileForm.valid) {
      this.officeService.updateOffice(this.editOfficeProfileForm.value, this.officeId).subscribe((data) => {
        console.log('speak to me ',data);
        this.router.navigate(['/']);
      }),
        (err) => console.log(err);
    }
  }

}
