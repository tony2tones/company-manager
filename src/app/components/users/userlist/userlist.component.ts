import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modals/staff.modal';
import { UserServices } from 'src/app/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public users:User[] = [];
  constructor(private userService: UserServices) { }


  ngOnInit(): void {
    this.userService.getUsers().subscribe((user: User[]) => {
      this.users = user
      console.log('User user', this.users);
    })
  }

}
