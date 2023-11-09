import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component';
import { HomeComponent } from './pages/menu/home/home.component';
import { ProductDetailComponent } from './pages/menu/product-detail/product-detail.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
