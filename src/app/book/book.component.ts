import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {

  @Input() Book: any;
  @Input() Wishlist: any;

  constructor() { }

  ngOnInit(): void {

  }

  removeFromWishlist(book) {
    let wishlist: any;
    wishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (wishlist === null || wishlist === undefined) {
    } else {
      wishlist.forEach((wishItem , index) => {
        if (wishItem.id === book.id) {
          wishlist.splice( index , 1 );
          localStorage.setItem('wishlist' , JSON.stringify(wishlist));
          window.location.reload();
        }
      });
    }
  }

  toggleModal(book) {
    book.modal = !book.modal;
  }

  addToWishlist(book) {
    let wishlist: any;
    wishlist = JSON.parse(localStorage.getItem('wishlist'));
    let bookAlreadyAdded = false;
    console.log(wishlist);
    if (wishlist !== null && wishlist !== undefined) {
      wishlist.forEach(wishItem => {
        if (wishItem.id === book.id) {
          bookAlreadyAdded = true;
        }
      });
    }
    if (!bookAlreadyAdded) {
      if (wishlist === null || wishlist === undefined) {
        wishlist = [book];
        localStorage.setItem('wishlist' , JSON.stringify(wishlist));
      } else {
        wishlist.push(book);
        localStorage.setItem('wishlist' , JSON.stringify(wishlist));
      }
      alert('Book was added successfully!');
    } else {
      alert('Book Already Added');
    }
  }

}
