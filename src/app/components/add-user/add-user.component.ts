import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modals/staff.modal';
import { UserServices } from 'src/app/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;
  public userFormToSubmit: User;

  @Input() roomId: string = ''; 

  constructor(private usersService: UserServices, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl(['']),
      lastName: new FormControl(['']),
      avatar: new FormControl(['']),
    });

  }
  
  public addUser() {
    this.userFormToSubmit = this.userForm.value;
    console.log('Submitted forms current value ', this.userFormToSubmit);
    if (this.userForm.valid) {
      // this.officeServices.updateOfficeUser(this.userForm.value, this.roomId).subscribe((data) => {
        this.usersService.addUser(this.userFormToSubmit).subscribe((data) => {
          console.log('did this work', data);
          this.router.navigateByUrl('');
      }),
        (err) => console.log(err);
    }
  }

}
