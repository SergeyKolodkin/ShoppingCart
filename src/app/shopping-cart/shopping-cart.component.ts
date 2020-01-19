import { Component, OnInit, Inject, Input } from '@angular/core';

import { Phone } from '../phone';
import { PhoneService } from '../phones.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {BasketDialogComponent} from '../basket-dialog/basket-dialog.component'
import { FormsModule } from '@angular/forms';
import {WishService} from '../wish.service';


export interface DialogData {
nameDialg: string;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  implements OnInit {
  phones: Phone[];
  nameDialog: string;
  private wishService: WishService;


  constructor(public dialog: MatDialog,private phoneService: PhoneService) { }



  ngOnInit() {
    this.getPhones();
  }



  getPhones(): void {
    this.phoneService.getPhones()
    .subscribe(phones => this.phones = phones);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.phoneService.addHero({ name } as Phone)
      .subscribe(phone=> {
        this.phones.push(phone);
      });
  }

  delete(phone: Phone): void {
    this.phones = this.phones.filter(h => h !== phone);
    this.phoneService.deletePhone(phone).subscribe();
  }






openDialog(): void {
    const dialogRef = this.dialog.open(BasketDialogComponent, {
      width: '1050px',
      data: {nameDialog: this.nameDialog }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nameDialog = result;
    });
  }

  addToWish(phone) {
    window.alert('Your product has been added to the cart!');
    this.wishService.addToWish(phone);
  }

}

