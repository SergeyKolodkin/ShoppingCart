import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  wishitems = [];

  addToWish(phone) {
    this.wishitems.push(phone);
  }

  getWishitems() {
    return this.wishitems;
  }

  clearCart() {
    this.wishitems = [];
    return this.wishitems;
  }


  constructor() { }
}
