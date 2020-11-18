import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product-list/product/product.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ShoppingCartComponent,
    PaymentComponent
    
    
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
