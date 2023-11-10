import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  dummy = [
    {
      id: 1,
      products: [
        {
          id: 2,
          name: "Mushroom",
          amount: 2
        },
        {
          id: 1,
          name: "Mushroom",
          amount: 1
        }
      ],
      total: 50000,
      createdAt: "2023-11-10 08:05:02",
      status: "IN PROGRESS"
    },
    {
      id: 2,
      products: [
        {
          id: 2,
          name: "Mushroom",
          amount: 2
        },
        {
          id: 1,
          name: "Mushroom",
          amount: 1
        }
      ],
      total: 50000,
      createdAt: "2023-11-10 08:05:02",
      status: "COMPLETE"
    }
  ]

  orderDetails: any;
  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  async getOrders() {
    let results = await this.cartService.getOrder();
    this.orderDetails = results;
    console.log('results', results);
  }
}
