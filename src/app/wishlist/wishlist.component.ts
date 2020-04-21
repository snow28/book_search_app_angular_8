import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit {

  wishlist: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
  }

}
