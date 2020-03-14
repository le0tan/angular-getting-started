import { Component, OnInit } from '@angular/core';

import { products } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert("shared!");
  }

  onNotify() {
    window.alert("notified");
  }

}
