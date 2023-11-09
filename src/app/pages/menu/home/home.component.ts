import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: any;

  activeItem: any;

  categories: any;
  products: any;

  search: any;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home' },
          { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
          { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
          { label: 'Documentation', icon: 'pi pi-fw pi-file' },
          { label: 'Settings', icon: 'pi pi-fw pi-cog' }
      ];

      this.categories = [
        { id: 1, label: "All"},
        { id: 2, label: "Appetizer"},
        { id: 3, label: "Main Course"},
        { id: 4, label: "Ala carte"},
        { id: 5, label: "Dessert"},
        // { id: 5, label: "Dessert"},
        // { id: 5, label: "Dessert"},
        // { id: 5, label: "Dessert"},
        // { id: 5, label: "Dessert"},
        // { id: 5, label: "Dessert"},
        // { id: 5, label: "Dessert"},
        // { id: 5, label: "Dessert"},
        // { id: 5, label: "Dessert"},
        // { id: 5, label: "Dessert"},
        // { id: 5, label: "Dessert"},
      ]

      this.activeItem = this.categories[0];


      this.products = [
        {
          id: 1,
          name: 'Mushroom Soup',
          stock: 10,
          image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
          description: 'Mushroom soup enak bet',
          categoryId: 5
        },
        {
          id: 2,
          name: 'Mushroom Soup',
          stock: 10,
          image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
          description: 'Mushroom soup enak bet',
          categoryId: 5
        },
        {
          id: 3,
          name: 'Mushroom Soup',
          stock: 10,
          image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
          description: 'Mushroom soup enak bet',
          categoryId: 5
        },
        {
          id: 3,
          name: 'Mushroom Soup',
          stock: 10,
          image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
          description: 'Mushroom soup enak bet',
          categoryId: 5
        }
      ]
  }

  productClick(id: any) {
    console.log('id', id);
    this.router.navigateByUrl('/product/'+id);
  }
}
