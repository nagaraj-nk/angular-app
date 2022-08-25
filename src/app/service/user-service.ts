import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../model/user';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  url = 'https://srjons-default-rtdb.firebaseio.com/api/users/user1.json';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<User>(this.url);
  }
}
