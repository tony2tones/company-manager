import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modals/staff.modal';
import { UserServices } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  public user:User;

  public userList:User[] = [];

  constructor(private usersService: UserServices) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data:User[]) => {
      this.userList = data;
      console.log('DOES THIS WORK NOW', data[0]);
    })
  }

}
