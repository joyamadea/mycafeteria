import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: any;
  
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
          label: 'Cart',
          icon: 'pi pi-fw pi-shopping-cart',
          routerLink: '/cart'
      }
  ];
  }

  goToOrders() {
    this.router.navigateByUrl('/order');
  }
}
