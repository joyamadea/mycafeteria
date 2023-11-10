import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(cart: any) {
    if (!localStorage.getItem("cart") || JSON.parse(localStorage.getItem("cart")!).length === 0) {
      let temp = [];
      temp.unshift(cart)
      localStorage.setItem("cart", JSON.stringify(temp));
    } else if (localStorage.getItem("cart")) {
      let temp = JSON.parse(localStorage.getItem("cart")!);
      temp.unshift(cart);
      localStorage.setItem("cart", JSON.stringify(temp));
    }

    console.log(localStorage.getItem("cart"));
  }

  getCart() {
    return JSON.parse(localStorage.getItem("cart")!);
  }

  localCheck() {
    
  }
}
