import { Component, OnInit } from '@angular/core';
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
  products:Product[];

  users:User[];

  constructor(private _productsServices: ProductsService) {
    this._productsServices.productsObservable.subscribe(
      (products)=>{
        this.products = products;
      }
    ),
    this._productsServices.usersObservable.subscribe(
      (users)=>{
        this.users = users;
      }
    )
  },


  ngOnInit() {
    this._productsServices.getProducts();
    this._productsServices.getUsers();
  }

}
