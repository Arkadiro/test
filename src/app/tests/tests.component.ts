import { UsersService } from './../users.service';
import { PersonInterface } from './../interfaces/personInterface';
import { Component, OnInit} from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  public data: Array<PersonInterface> = [];
  public users: Array<PersonInterface> = new Data().persons;
  public loaded = false;
  public mixed: Array<PersonInterface> = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    const person = {name: 'Sara', age: 47};
    this.data = this.userService.getData();
    this.fiterUsers();
    this.arraySum();
    this.addUser({name: 'Sara', age: 47});
    this.mixUsers(this.data, this.users);
    this.identity(person);
    this.loaded = true;
  }

  fiterUsers(): void {
    this.users = this.users.filter((user) => user.age >= 30);
  }

  addUser(user: PersonInterface) {
    this.users.push(user);
  }

  arraySum() {
    const numbers = [21, 34, 55];
    const result = numbers.reduce((el1, el2) => el1 + el2);
    console.log(result);
  }

  mixUsers(el1: Array<PersonInterface>, el2: Array<PersonInterface>): void {
    this.mixed = el1.concat(el2);
  }

  identity<T>(arg: T): void {
    if (Array.isArray(arg)) {
      arg.forEach(el => console.log(el));
    } else if (typeof arg === 'object') {
      Object.keys(arg).forEach(key => {
        console.log(arg[key]);
      });
    } else {
      console.log(arg);
    }
  }


}
