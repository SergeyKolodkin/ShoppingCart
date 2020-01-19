import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishDialogComponent } from './wish-dialog/wish-dialog.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BasketDialogComponent } from './basket-dialog/basket-dialog.component';


const routes: Routes=
[
  { path: '', redirectTo: '/shopping-cart', pathMatch: 'full' },
  {path:'shopping-cart', component:ShoppingCartComponent},
  {path:'order', component:OrderComponent},
  { path: 'detail/:id', component: BasketDialogComponent },
  {path:'wish-list', component: WishListComponent}

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
