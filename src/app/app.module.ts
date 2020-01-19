import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { BasketDialogComponent } from './basket-dialog/basket-dialog.component';
import { OrderComponent } from './order/order.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishDialogComponent } from './wish-dialog/wish-dialog.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService } from './in-memory-phone.service';
import {PhoneService} from './phones.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';



@NgModule({
  declarations: [
    AppComponent,
    BasketDialogComponent,
    OrderComponent,
    HeaderComponent,
    ShoppingCartComponent,
    WishDialogComponent,
    WishListComponent,
    ProductAlertsComponent
  ],
  entryComponents:[BasketDialogComponent,WishDialogComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,

    TextMaskModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }

    )
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
