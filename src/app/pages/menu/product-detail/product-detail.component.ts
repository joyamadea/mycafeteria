import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  detail = {
    id: 3,
    name: 'Mushroom Soup',
    stock: 10,
    image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
    description: 'Mushroom soup enak bet',
    category: {
      id: 1,
      name: 'Appetizer'
    },
    price: 25000
  }

  value = 1;

  constructor() {}

  ngOnInit() {}

  addToCart() {
    let tempItem = {
      id: this.detail.id,
      amount: this.value
    }

    console.log('tempItem', tempItem);
  }
}
