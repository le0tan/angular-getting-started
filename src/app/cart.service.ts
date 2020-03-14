import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as shipping from '../assets/shipping.json'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return shipping.default;
  }

  constructor(private http: HttpClient) { }
}
