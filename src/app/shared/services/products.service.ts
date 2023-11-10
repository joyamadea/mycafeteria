import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = environment.BASE_URL;

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
    return this.http.get(this.url+'/products/'+id);
  }

  getProductDetail(id: any) {
    return this.http.get(this.url+'/products/detail/'+id);
  }
}
