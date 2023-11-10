import { CurrencyPipe } from '@angular/common';
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
    private productService: ProductsService,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit() {

      this.getCategories();
      this.getAllProducts();
  }

  transformCurrency(curr: any) {
    return this.currencyPipe.transform(curr, 'IDR');
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

  changeActive(event: any) {
    if (event.id == 0) {
      this.getAllProducts();
    } else {
      this.productService.getProductByCategory(event.id).subscribe({
        next: ((res: any) => {
          this.products = res.data;
        }),
        error: ((err) => console.log('err', err))
      })
    }
    
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.products = res.data;
    })
  }

  productClick(id: any) {
    this.router.navigateByUrl('/product/'+id);
  }
}
