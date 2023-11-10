import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [MessageService]
})
export class CartComponent {
  orders: any;
  carts: any;
  
  total = 0;

  methodList = [
    { name: 'Debit', code: 'Debit'},
    { name: 'Cash', code: 'Cash'},
    { name: 'QRIS', code: 'QRIS'}
  ];

  checkoutFlag = false;

  selectedMethod = this.methodList[0];
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getCart();
  }

  async getCart() {
    let result = await this.cartService.getCart();
    this.orders = {data: result};
    result.forEach((element: any) => {
      this.productService.getProductDetail(element.id).subscribe({
        next: (res: any) => {
          element.info = res.data;
          this.total = this.total + (element.amount * element.info.price);
        }
      })
    });
    this.carts = result;
  }

  onChangy() {
    this.total = 0;
    this.carts.forEach((element: any) => {
      this.total = this.total + (element.amount * element.info.price);
    });
  }

  checkout() {
    let temp = this.orders;

    // this.carts.data = temp;
    // temp.data = this.orders;
    temp.paymentMethod = this.selectedMethod.code;
    temp.total = this.total;

    //for local storage only
    temp.createdAt = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
    temp.status = "IN PROGRESS";
    temp.userId = localStorage.getItem("userId");

    this.cartService.addOrder(temp);
    this.checkoutFlag = true;
    localStorage.removeItem("cart");
    
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order has been placed' });
    setTimeout(() => {
      this.router.navigateByUrl('/order');
    }, 1000)
  }

  ngOnDestroy() {
    if (this.checkoutFlag == false && this.carts) {
      localStorage.setItem("cart", JSON.stringify(this.carts));
    }
    
  }
}
