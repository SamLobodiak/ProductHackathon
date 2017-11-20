import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { User } from './../user';
import { ProductsService } './../products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
