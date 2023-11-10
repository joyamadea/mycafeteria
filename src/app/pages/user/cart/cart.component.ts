import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  carts: any;
  total = 0;

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getCart();
  }

  async getCart() {
    let res = await this.cartService.getCart();
    res.forEach((element: any) => {
      this.productService.getProductDetail(element.id).subscribe({
        next: (res: any) => {
          element.info = res.data;
          this.total = this.total + (element.amount * element.info.price);
        }
      })
    });
    this.carts = res;
  }

  onChangy() {
    this.total = 0;
    this.carts.forEach((element: any) => {
      this.total = this.total + (element.amount * element.info.price);
    });
  }

  checkout() {
    console.log('carts', this.carts);
  }

  ngOnDestroy() {
    localStorage.setItem("cart", JSON.stringify(this.carts));
  }
}
