import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(cart: any) {
    // localStorage.removeItem("cart");
    // console.log('asdf', localStorage.getItem("cart"));
    if (!localStorage.getItem("cart")) {
      let temp = [];
      temp.unshift(cart)
      localStorage.setItem("cart", JSON.stringify(temp));
    } else if (localStorage.getItem("cart")) {
      let temp = JSON.parse(localStorage.getItem("cart")!);
      temp.unshift(cart);
      localStorage.setItem("cart", JSON.stringify(temp));
    }
  }

  getCart() {
    return JSON.parse(localStorage.getItem("cart")!);
  }

  addOrder(cart: any) {
    // console.log('cart', JSON.stringify(cart));
    // localStorage.removeItem("order");
    if (!localStorage.getItem("order")) {
      let temp = [];
      temp.unshift(cart);
      localStorage.setItem("order", JSON.stringify(temp));
    } else if (localStorage.getItem("order")) {
      let temp = JSON.parse(localStorage.getItem("order")!);
      temp.unshift(cart);
      localStorage.setItem("order", JSON.stringify(temp));
    }
  }

  getOrder() {
    return JSON.parse(localStorage.getItem("order")!);
  }

  localCheck() {
    
  }
}
