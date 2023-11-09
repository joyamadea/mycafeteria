import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: any;
  
  ngOnInit() {
    this.items = [
      {
          label: 'Cart',
          icon: 'pi pi-fw pi-shopping-cart',
          
      }
  ];
  }
}
