import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(private officeService: OfficeServices) { }


  ngOnInit(): void {
    // this.officeService.
    this.createFormGroup();
  }

  createFormGroup() {
    this.officeProfileForm = new FormGroup({
      companyName: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      officeCapacity: new FormControl(''),
      address: new FormControl(''),
      staff: new FormControl(''),
    })
  }

  public onSubmit() {

  }

}
