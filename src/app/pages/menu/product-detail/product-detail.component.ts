import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  detail!: any;
  id!: Observable<string>;

  value = 1;

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.productService.getProductDetail(this.id).subscribe({
      next: ((res: any) => {
        console.log('res', res.data);
      this.detail = res.data;
      }),
      error: ((err) => console.log('err', err.error.message))
    })
  }

  addToCart() {
    let tempItem = {
      id: parseInt(this.id.toString()),
      amount: this.value
    }

    this.cartService.addToCart(tempItem);
  }
}
