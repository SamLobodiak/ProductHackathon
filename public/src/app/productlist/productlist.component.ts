import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product';
import { User } from './../user';
import { Http } from '@angular/http';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Product[];
  users: User[];

  constructor(private _productsServices: ProductsService, private _router: Router) {
    this._productsServices.productsObservable.subscribe(
      (products) => {
        this.products = products;
      }
    ),
    this._productsServices.usersObservable.subscribe(
      (users) => {
        this.users = users;
      }
    );
  }

  ngOnInit(id) {
    this._productsServices.getProduct(id);
  }

  product() {
    this._router.navigate(['/products']);
  }

}
