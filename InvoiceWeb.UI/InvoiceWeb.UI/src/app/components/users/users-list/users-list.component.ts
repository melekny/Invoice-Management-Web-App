import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  users: User[] =[
    {
      id:'7dk9gm1nh3',
      name:'Meleknur Yazlamaz',
      email: 'mny@gmail.com',
      phone:123456789,
      houseNo:63,
    }
  ]

  constructor() { }

  ngOnInit(): void {
    // this.users.push()
  }

}
