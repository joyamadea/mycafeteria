import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

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
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home' },
          { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
          { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
          { label: 'Documentation', icon: 'pi pi-fw pi-file' },
          { label: 'Settings', icon: 'pi pi-fw pi-cog' }
      ];

      // this.categories = [
      //   { id: 0, label: "All"},
      //   { id: 1, label: "Appetizer"},
      //   { id: 2, label: "Main Course"},
      //   { id: 3, label: "Ala carte"},
      //   { id: 4, label: "Dessert"},
      // ]

      this.getCategories();
      this.getAllProducts();
  }

  getCategories() {
    this.productService.getCategories().subscribe((res: any) => {
      this.categories = [{id: 0, label: "All"}];
      res.data.forEach((element: any) => {
        this.categories.push({id: element.categoryID, label: element.name});
      });
      this.activeItem = this.categories[0];
    })
  }

  getAllProducts() {
    console.log('test');
    this.productService.getAllProducts().subscribe((res: any) => {
      this.products = res.data;
      console.log('res', res);
    })
  }

  productClick(id: any) {
    console.log('id', id);
    this.router.navigateByUrl('/product/'+id);
  }
}
