import { Component, OnInit } from '@angular/core';
import { LoginAuth } from 'src/app/model/login-auth';
import { LoginService } from 'src/app/services/login.service';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginAuth: LoginAuth | undefined = {} as LoginAuth;
  constructor(private loginService: LoginService) {}

  error: any;
  complete: any;

  ngOnInit(): void {}

  login() {
    let credentials = Buffer.from(
      this.loginAuth?.username + ':' + this.loginAuth?.password
    ).toString('base64');

    console.log('creds: ' + credentials);

    this.loginService.login(credentials).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err) => (this.error = JSON.stringify(err)),
      complete: () => (this.complete = true),
    });
  }
}
