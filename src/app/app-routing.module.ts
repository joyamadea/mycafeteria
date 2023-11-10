import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component';
import { HomeComponent } from './pages/menu/home/home.component';
import { ProductDetailComponent } from './pages/menu/product-detail/product-detail.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { OrdersComponent } from './pages/user/orders/orders.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
