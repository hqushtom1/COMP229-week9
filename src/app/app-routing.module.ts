import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardAuthService } from './guard-auth.service';
import { LoginComponent } from './login/login.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsComponent } from './products/products.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: "user_list", component: UsersListComponent, canActivate: [GuardAuthService] },
  { path: "login", component: LoginComponent },
  { path: "products", component: ProductsComponent, canActivate: [GuardAuthService] },
  { path: "product_info", component: ProductInfoComponent },
  { path: "user/:id", component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
