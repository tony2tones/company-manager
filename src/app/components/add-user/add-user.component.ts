import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OfficeServices } from 'src/app/service.service';
import { UserServices } from 'src/app/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;

  @Input() roomId: string = ''; 

  constructor(private usersService: UserServices, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl(['', Validators.required]),
      lastName: new FormControl(['', Validators.required]),
      avatar:new FormControl(['', Validators.required]),
    });

  }
  
  public addUser() {
console.log('Submitted forms current value ', this.userForm.value);
    if (this.userForm.valid) {
      // this.officeServices.updateOfficeUser(this.userForm.value, this.roomId).subscribe((data) => {
        this.usersService.addUser(this.userForm).subscribe((data) => {
          console.log('did this work', data);
      }),
        (err) => console.log(err);
    }
  }

}
