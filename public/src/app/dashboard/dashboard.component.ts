import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { User } from './../user';
import { ProductsService } from './../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product: Product = new Product();
  products: Array<Product>;
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

  ngOnInit() {
    this._productsServices.getProducts();
    this._productsServices.getUsers();
  }
  show(id) {
    this._productsServices.getProduct(id);
    this._router.navigate([`/products/${id}`]);
  }
  update(id) {
    console.log(1);
    this._productsServices.getProduct(id);
    this._router.navigate([`/edit/${id}`]);
  }

  delete(id) {
    this._productsServices.deleteProduct(id);
  }
}
