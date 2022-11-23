import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { InterceptTokenService } from './intercept-token.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductInfoComponent,
    UsersListComponent,
    UserDetailComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptTokenService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
