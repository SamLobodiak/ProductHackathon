import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { User } from './../user';
import { ProductsService } from './../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {
  product: Product = new Product();
  products: Array<Product>;
  switch: boolean = true;

  constructor(private _productsServices: ProductsService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._productsServices.addProduct(this.product);
    console.log(this.product);
    this.product = new Product();
    console.log('product went to save!!!');
    this._router.navigate(['/dashboard']);
  }

}
