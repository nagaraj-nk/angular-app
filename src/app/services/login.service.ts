import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginAuth } from '../model/login-auth';
import { Utils } from '../utils/utils';
import * as Constants from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private utils: Utils) {}

  login(credentials: any) {
    console.log('creds', credentials);
    let httpOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + credentials,
      }),
      responseType: 'text',
    };

    console.log(httpOptions);

    return this.http.get<string>(Constants.LOGIN, httpOptions);
  }
}
