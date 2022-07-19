import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private usersService: UserServices, private fb: FormBuilder, private router: Router) { }

  public ngOnInit(): void {
    this.createFormGroup();
  }

  public createFormGroup(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
    });
  }

  public addUser(): void {
    this.userFormToSubmit = this.userForm.value;
    if (this.userForm.valid) {
      this.usersService.addUser(this.userFormToSubmit).subscribe(() => {
        this.router.navigateByUrl('');
      }),
        (err) => console.log(err);
    }
  }

}
