import { Injectable } from '@angular/core';
import { UsersRepository } from './users.repository';
import { UsersInterface } from './interfaces/userInterface';
import { PersonInterface } from './interfaces/personinterface';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersRepository: UsersRepository;

  public users: UsersInterface[] = [];

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
   }


  public async getUsers() {
    if (this.users.length === 0) {
      this.users = await this.usersRepository.getUsers() as Array<UsersInterface>;
        console.log('hello');
      return this.users;
    } else {
      return this.users;
    }
  }

  public getData(): PersonInterface[] {
    return [
        {name: 'Maria', age: 30},
        {name: 'Marta', age: 23},
        {name: 'Anna', age: 32}
      ];
  }

}
