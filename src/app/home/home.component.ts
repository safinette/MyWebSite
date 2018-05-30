import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  userEventsSubscription: Subscription;
  user: UserModel;

  constructor(private userService: UserService) { }

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

}
