import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductsService {
  products:Prouct[];
  productsObservable = new BehaviorSubject(this.products);

  constructor(private _http: Http) { }

  getProducts(){
    this._http.get('/produts/show').subscribe(
      (products)=>{
        this.products = products.json();
        this.productsObservable.next(this.products);
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  addProduct(product:Product){
    console.log('attempting to add product', product);
    this._http.post('/products/create').subscribe(
      (productCreated)=>{
        this.products.push(productCreated.json());
        this.productsObservable.next(this.products);
      }
    )
  }
}
