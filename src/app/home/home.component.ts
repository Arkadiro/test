import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UsersInterface } from '../interfaces/userInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public users: Array<UsersInterface> = [];
  private usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
    console.log(this.users);
  }

}
