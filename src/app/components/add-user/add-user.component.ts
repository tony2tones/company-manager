import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modals/user.modal';
import { UserServices } from 'src/app/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;

  public userFormToSubmit: User;

  @Input() public roomId: string = '';

  constructor(private usersService: UserServices, private formBuilder: FormBuilder, private router: Router) { }

  public ngOnInit(): void {
    this.createFormGroup();
  }

  public createFormGroup(): void {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl(['']),
      lastName: new FormControl(['']),
      avatar: new FormControl(['']),
    });
  }

  public addUser(): void {
    this.userFormToSubmit = this.userForm.value;
    if (this.userForm.valid) {
      this.usersService.addUser(this.userFormToSubmit).subscribe((data) => {
        this.router.navigateByUrl('');
      }),
        (err) => console.log(err);
    }
  }

}
