import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UsersInterface } from '../interfaces/userInterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<UsersInterface> = [];
  private usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
    this.identity(3);
  }

  identity<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
  }

}
