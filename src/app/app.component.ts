import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app-base';

  user: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.showUser();
  }

  showUser() {
    this.userService.getUser().subscribe(
      (data: User) => {
        this.user = {
          name: data.name,
          email: data.email,
        };
        console.log(this.user);
      },
      (error) => {
        //Error callback
        console.error('Request failed with error');
        alert(error);
      },
      () => {
        //Complete callback
        console.log('Request completed');
      }
    );
  }
}
