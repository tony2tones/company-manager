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

  // eventEmitter = new EventEmitter<any>
  constructor(private officeService: OfficeServices, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    // this.officeService.
    this.createFormGroup();
  }

  createFormGroup() {
    this.officeProfileForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      officeCapacity: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      staff: [''],
    });
    
  }

  public onSubmit() {
    console.log('does this work? ', this.officeProfileForm.value);
  }

}
