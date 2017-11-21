import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { User } from './../user';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product: Product = new Product();
  products: Array<Product>;
  users: User[];

  constructor(private _productsServices: ProductsService) {
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


  delete(id) {
    this._productsServices.deleteProduct(id);
  }
}
