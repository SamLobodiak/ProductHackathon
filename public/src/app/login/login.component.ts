import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Product } from './../product';
import { ProductsService } from './../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  users: Array<User>;
  switch: boolean = true;
  constructor(private _productsServices: ProductsService, private _router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this._productsServices.addUser(this.user);
    console.log(this.user);
    this.user = new User();
    console.log('user went to save!!!');
    this._router.navigate(['/products']);
  }

}
