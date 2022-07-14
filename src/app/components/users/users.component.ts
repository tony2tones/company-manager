import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/modals/staff.modal';
import { UserServices } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() usersEmitter = new EventEmitter<User[]>();

  public searchName: FormGroup;

  public form: FormGroup;

  public formSubscription: [Subscription?] = [];

  public user: User;

  public userList: User[] = [];

  public filteredUserList:User[] = [];
  
  public selectedUsers: User[] = [];

  constructor(private usersService: UserServices, private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedUsers: this.fb.array([], [Validators.required])
    })
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.userList = data;

      this.filteredUserList = this.userList.map((user, index) => {
        return Object.assign({checked: false},user);
      });
    
      console.log('check this out: ', this.filteredUserList);
    });
    this.searchName = this.createFormGroup();
    this.formSubscription.push(this.searchName.valueChanges.subscribe((this.onFilterChanges.bind(this))))
  }

  public createFormGroup(): FormGroup {
    return this.searchName = this.fb.group({
      searchterm: ['']
    });
  }


  public onFilterChanges(): void {
    const searchTerm = this.searchName.get('searchterm').value;
    this.filteredUserList = this.userList
      .filter((user) => {
        return (
          user.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
          user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
          !searchTerm);
      })
  }

  public addToList() {
    console.log('checked User list', this.selectedUsers);
  }


  public onCheckboxChange(e) {
    this.filteredUserList.filter(user => {
     if(user._id === e._id) user.checked = !user.checked;
    })
    console.log('updated list? ', this.filteredUserList);
    this.selectedUsers = this.filteredUserList.filter((user) => user.checked);
  }

  submit() {
    this.usersEmitter.emit(this.selectedUsers);
  }

}
