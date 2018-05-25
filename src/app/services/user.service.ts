import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:UserModel;

  constructor() { 
    this.user = {id:1,login:'safinette',email:'safia@gmail.com'};
  }

  authenticate(credentials: {login: string; password: string})/*: Observable<UserModel>*/ {
    // TODO faire appel à l'API
    //return new Observable(this.user);

  }
}
