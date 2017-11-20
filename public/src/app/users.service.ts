import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UsersService {

  constructor(private _http: Http) { }


}
