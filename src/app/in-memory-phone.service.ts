import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Phone } from './phone';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const phones = [
      { id: 1, path:'/assets/phone1.png', name: 'Nokia 324', price:7000,quantity:1},
      { id: 2, path:'/assets/phone2.jpeg', name: 'Sansung 24', price:4000,quantity:1},
      { id: 3, path:'/assets/phone3.png', name: 'Motorola a4', price:3000, quantity:1},
      { id: 4, path:'/assets/phone4.jpg', name: 'Sony 2', price:5000, quantity:1},
      { id: 5, path:'/assets/phone5.jpg', name: 'Digma 123', price:8000,quantity:1},
      { id: 6, path:'/assets/phone6.jpg', name: 'DNS 56', price:6000,quantity:1},
      { id: 7, path:'/assets/phone4.jpg', name: 'Sony 2', price:5000, quantity:1},
      { id: 8, path:'/assets/phone5.jpg', name: 'Digma 123', price:8000,quantity:1},
      { id: 9, path:'/assets/phone6.jpg', name: 'DNS 56', price:6000,quantity:1},
    ];
    return {phones};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(phones: Phone[]): number {
    return phones.length > 0 ? Math.max(...phones.map(phone => phone.id)) + 1 : 1;
  }
}



