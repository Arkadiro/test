import { Injectable } from '@angular/core';
import { UsersRepository } from './users.repository';
import { UsersInterface } from './interfaces/userInterface';
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

}
