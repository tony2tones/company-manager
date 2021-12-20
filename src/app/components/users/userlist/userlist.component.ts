import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userService: UserServices) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      console.log('User data', data);
    })
  }

}
