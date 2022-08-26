import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
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

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {
  }

  navigate() {
    this.route.navigate(["/search/results"], {});
  }

}
