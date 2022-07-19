import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficeServices } from 'src/app/service.service';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
  public officeProfileForm: FormGroup;

  public colourMatcher: string = '';

  constructor(private officeService: OfficeServices, private fb: FormBuilder, private router: Router) { }

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
      colourScheme: ['', [Validators.required]],
      staff: []
    });

  }
  get getStaff(): FormArray {
    return this.officeProfileForm.get["users"] as FormArray;
  }

  public colourSelected(colour: string) {
    this.colourMatcher = colour;
    this.officeProfileForm.patchValue({
      colourScheme: colour
    });
    this.officeProfileForm.controls.staff.patchValue([]);
  }

  public onSubmit() {
    if (this.officeProfileForm.valid) {
      this.officeService.addOffice(this.officeProfileForm.value).subscribe(() => {
        this.router.navigateByUrl('');
      }),
        (err) => console.log(err);
    }
  }
}
