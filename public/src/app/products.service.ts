import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './product';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductsService {
  products: Product[];
  productsObservable = new BehaviorSubject(this.products);
  users: User[];
  usersObservable = new BehaviorSubject(this.users);

  constructor(private _http: Http) { }

  getUsers() {
    this._http.get('/users/show').subscribe(
      (users) => {
        // if call = success
        this.users = users.json();
        this.usersObservable.next(this.users);
      },
      (error) => {
        // if call != success
        console.log(error);
      }
    );
  }
  addUser(user: User) {
    console.log('attempting to add user', user);
    this._http.post('/users/create', user).subscribe(
      (userCreated) => {
        this.users.push(userCreated.json());
        this.usersObservable.next(this.users);
      }
    );
  }

  getProducts() {
    this._http.get('/products/show').subscribe(
      (products) => {
        this.products = products.json();
        this.productsObservable.next(this.products);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addProduct(product: Product) {
    console.log('attempting to add product', product);
    this._http.post('/products/create', product).subscribe(
      (productCreated) => {
        this.products.push(productCreated.json());
        this.productsObservable.next(this.products);
      }, (error) => {
        console.log(error);
      }
    );
  }
  updateProduct(id: string) {
    console.log('Product Updated function hit!!!');
    this._http.put(`/products/edit/${id}`, this.products).subscribe(
      (productUpdated) => {
        this.products.push(productUpdated.json());
        this.productsObservable.next(this.products);
      }, (error) => {
        console.log(error);
      }
    );
  }
  deleteProduct(id: string) {
    console.log('product deleted function hit!!!');
    this._http.delete(`products/delete/${id}`).subscribe(
      (productDeleted) => {
        console.log('successfully deleted!');
        this.products = productDeleted.json();
      }, (error) => {
        console.log(error);
      }
    );
  }
  getProduct(id: string) {
    console.log('2');
    this._http.get(`/products/${id}`).subscribe(
      (products) => {
        // if call = success
        this.products = products.json();
        this.productsObservable.next(this.products);
      },
      (error) => {
        // if call != success
        console.log(error);
      }
    );
  }
}
