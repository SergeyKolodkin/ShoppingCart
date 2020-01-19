import { Component, OnInit } from '@angular/core';
import { OrderService} from '../order.service';
import { NgModule }   from '@angular/core';






@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

  export class OrderComponent  {
    items;


    constructor(
      private orderService: OrderService
    ) {
      this.items = this.orderService.getOrder();
    }


    /** Gets the total cost of all transactions. */


  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}
