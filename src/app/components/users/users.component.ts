import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/modals/staff.modal';
import { UserServices } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  public searchName: FormGroup; 
  
  public formSubscription: [Subscription?] = [];

  public user:User;

  public userList:User[] = [];

  public filteredUserList:User[] = [];

  constructor(private usersService: UserServices, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data:User[]) => {
      this.userList = data;
      this.filteredUserList = this.userList;
    });
    this.searchName = this.createFormGroup();
    this.formSubscription.push(this.searchName.valueChanges.subscribe((this.onFilterChanges.bind(this))))
  }

  public createFormGroup():FormGroup {
    return this.searchName = this.fb.group({
      searchterm: ['']
    });
  }


  public onFilterChanges():void {
    const searchTerm = this.searchName.get('searchterm').value;
    this.filteredUserList = this.userList
      .filter((user) => {
      return (
        user.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        !searchTerm);
      })
  }

}
