import { UsersInterface } from './interfaces/userInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersRepository {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }


  getUsers(): Promise<Object> {
      return this.http.get('https://jsonplaceholder.typicode.com/users')
        .toPromise();
  }
}
