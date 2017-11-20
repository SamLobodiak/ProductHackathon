import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UsersService {
  users:User[];
  usersObservable = new BehaviorSubject(this.users);
  constructor(private _http: Http) { }

  getUsers(){
    this._http.get('/users/show').subscribe(
      (users)=>{
        // if call = success
        this.users = users.json();
        this.usersObservable.next(this.users);
      },
      (error)=>{
        // if call != success
        console.log(error)
      }
    )
  }
  addUser(user:User){
    console.log('attempting to add user', user);
    this._http.post('/users/create', user).subscribe(
      (userCreated)=>{
        this.users.push(userCreated.json());
        this.usersObservable.next(this.users);
      }
    )
  }
}
