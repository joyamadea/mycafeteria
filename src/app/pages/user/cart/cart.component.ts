import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart = [
    {
      id: 1,
      name: 'Mushroom Soup',
      image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
      quantity: 2,
      price: 25000
    },
    {
      id: 1,
      name: 'Mushroom Soup',
      image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
      quantity: 2,
      price: 25000
    }
  ]
}
