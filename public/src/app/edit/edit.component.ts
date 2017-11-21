import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { User } from './../user';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
    this._productsServices.getProduct(id);
  }

  ngOnInit(id) {
    this.product = new Product();
  }

  update(id) {
    console.log(id);
  }

}
