import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user-model';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserModel;
  userEvents: BehaviorSubject<UserModel>;

  constructor(private http: HttpClient) {
    this.userEvents = new BehaviorSubject(undefined);
    this.retrieveUser();
  }

  authenticate(credentials: {login: string; password: string}): Observable<UserModel> {
    return this.http.post<UserModel>(
      'http://localhost:8080/lesdessinsdesafinette2/connect',
      {login: credentials.login, password: credentials.password},
      {headers: {'Content-Type': 'application/json'}}).pipe(
        tap(
          (user: UserModel) => this.storeLoggedInUser(user)
        )
     );
  }

  storeLoggedInUser(user) {
    if (user) {
      this.userEvents.next(user);
      console.log(JSON.stringify(user));
      window.localStorage.setItem('rememberMe', JSON.stringify(user));
    }
  }

  retrieveUser(): void {
    const userString = window.localStorage.getItem('rememberMe');
    if (userString) {
      const user = JSON.parse(userString);
      this.userEvents.next( user);
    }
  }

  logout() {
    this.userEvents.next(null);
    window.localStorage.removeItem('rememberMe');
  }
}
