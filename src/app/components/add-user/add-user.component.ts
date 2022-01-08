import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficeServices } from 'src/app/service.service';
import { officeServicess } from 'src/app/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;

  @Input() roomId: string = ''; 

  constructor(private officeServices: OfficeServices, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      avatar: [0, Validators.required],
    });

  }
  
  public addUser() {

    if (this.userForm.valid) {
      this.officeServices.updateOfficeUser(this.userForm.value, this.roomId).subscribe((data) => {

      }),
        (err) => console.log(err);
    }
  }

}
