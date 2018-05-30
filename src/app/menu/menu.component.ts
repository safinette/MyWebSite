import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user-model';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  userEventsSubscription: Subscription;
  user: UserModel;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe(
      userModel => this.user = userModel
    );
  }

  ngOnDestroy() {
    if (this.userEventsSubscription) {
      this.userEventsSubscription.unsubscribe();
    }
  }

  logout(event) {
    event.preventDefault();
    this.userService.logout();
    this.router.navigate(['/']);
  }

}
