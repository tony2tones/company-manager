import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServices } from 'src/app/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private userService: UserServices, private formBuilder: FormBuilder) { }

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

  public colourSelected(colour: string) {
    this.userForm.patchValue({
      colourScheme: colour
    });
  }
  
  public onSubmit() {
    console.log('details', this.userForm);

    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe((data) => {

      }),
        (err) => console.log(err);
    }
  }

}
