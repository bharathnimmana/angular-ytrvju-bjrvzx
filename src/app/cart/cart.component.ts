import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items=[];
checkoutForm;
  constructor(private cart:CartService,
  private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.items= this.cart.getItems();
     this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cart.clearItems();
    this.checkoutForm.reset();
  }
}