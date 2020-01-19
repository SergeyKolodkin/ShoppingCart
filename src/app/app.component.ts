import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {MaterialModule} from './material/material.module';
import { BasketDialogComponent } from './basket-dialog/basket-dialog.component';
import { WishDialogComponent } from './wish-dialog/wish-dialog.component';


@Component({
  selector: 'app-root',
//   template:`<div>
//   <mat-toolbar class="nav">
//   <div class="nav__menu">
//     <span class="span span-border"><a routerLink="">Главная</a></span>
//     <span class="span"><a routerLink="/order">Корзина</a></span>
//   </div>
//   <div class="total">
//     <div class="total__name">
//       <span class="span"><mat-icon class="icon__center">favorite</mat-icon></span>
//       <span class="span">Товаров</span>
//       <span class="span"><mat-icon class="icon__center"> shopping_cart</mat-icon></span>
//     </div>
//     <div class="sum">
//       <div class="name__sum">
//         <span class="span">В корзине</span>
//         <span class="span">На сумму</span>
//       </div>
//       <div class="count">
//         <span class="span">empaty</span>
//         <span class="span">empaty</span>
//       </div>
//     </div>
//   </div>
// </mat-toolbar>
// <router-outlet></router-outlet> </div>`
// ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'ShoppingCart';
  constructor(public dialog: MatDialog){}





  openDialog()
  {
    this.dialog.open(BasketDialogComponent);
  }

  openWishMenu()
  {

    this.dialog.open(WishDialogComponent)

  }


}
