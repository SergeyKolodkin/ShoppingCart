import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  items = [];

  addToOrder(phone) {
    this.items.push(phone);
  }

  getOrder() {
    return this.items;
  }

  clearOrder() {
    this.items = [];
    return this.items;
  }


  constructor() { }
}
