import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get(this.url+'/categories');
  }

  getAllProducts() {
    return this.http.get(this.url+'/products');
  }

  getProductByCategory(id: any) {
    return this.http.get(this.url+'/products'+id);
  }

  getProductDetail(id: any) {
    return this.http.get(this.url+'/products/detail/'+id);
  }

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
