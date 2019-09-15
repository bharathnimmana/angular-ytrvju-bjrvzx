import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items=[];
  constructor(private http:HttpClient) { }
  addToCart(products){
    this.items.push(products);
  }
  getItems(){
    return this.items;
  }
  clearItems(){
    this.items=[];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}