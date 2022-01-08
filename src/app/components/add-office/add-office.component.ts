import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OfficeServices } from 'src/app/service.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  public officeProfileForm: FormGroup;

  constructor(private officeService: OfficeServices, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.officeProfileForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      officeCapacity: [0, Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      colourScheme: [''],
      staff: this.formBuilder.array([{
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        avatar: [''],
      }])
      // staff: this.formBuilder.array([]),
    });

  }

  public colourSelected(colour: string) {
    this.officeProfileForm.patchValue({
      colourScheme: colour
    });
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
