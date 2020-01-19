import { Component, OnInit, Input } from '@angular/core';
import { Phone } from '../phone';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhoneService }  from '../phones.service';
import { OrderService} from '../order.service'



@Component({
  selector: 'app-basket-dialog',
  templateUrl: './basket-dialog.component.html',
  styleUrls: ['./basket-dialog.component.css']
})
export class BasketDialogComponent implements OnInit {
  phone: Phone;

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private location: Location,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.getPhone();
  }

  getPhone(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.phoneService.getPhone(id)
      .subscribe(phone => this.phone = phone);
  }

  goBack(): void {
    this.location.back();
  }

  addToOrder(phone) {
    window.alert('Your product has been added to the cart!');
    this.orderService.addToOrder(phone);
  }

}
