import { Component, OnInit } from '@angular/core';
import { WishService } from '../wish.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishitems;

  constructor(
    private wishService: WishService
  ) {
    this.wishitems = this.wishService.getWishitems();
  }

  ngOnInit() {
  }

}
