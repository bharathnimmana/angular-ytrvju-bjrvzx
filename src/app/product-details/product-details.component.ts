import { Component, OnInit } from '@angular/core';
import {products} from '../products';
import {ActivatedRoute} from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product;
  constructor(private route:ActivatedRoute,private cart:CartService) {
    
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product=products[+params.get('productId')]
    });
  }

  addToCart(products){
    window.alert('Your product has been added to cart successfully');
    this.cart.addToCart(products);
  }
  getItems(){
     window.alert('Your product in cart '+this.cart.getItems());
  }
  clear(){
    window.alert("Your Cart is Empty now");
    this.cart.clearItems();
  }

}