import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user-service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNavbarComponent } from './components/page-navbar/page-navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductService } from './services/product.service';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNavbarComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchModule
  ],
  providers: [
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
