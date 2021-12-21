import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficeServices } from 'src/app/service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private officeService: OfficeServices, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      laststName: ['', Validators.required],
      officeCapacity: [0, Validators.required],
    });

  }

  public colourSelected(colour: string) {
    this.userForm.patchValue({
      colourScheme: colour
    });
  }
  
  public onSubmit() {
    console.log('details', this.userForm);

    if (this.userForm.valid) {
      this.officeService.addOffice(this.userForm.value).subscribe((data) => {

      }),
        (err) => console.log(err);
    }
  }

}
