import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  API_KEY = 'AIzaSyDHFHCZ8ASRTkSHOkyE1Oy6n_OuaJOidXc';
  MAX_RESULTS = 20;
  startIndex = 0;
  response: any;
  key: string;
  API_URL = 'https://www.googleapis.com/books/v1/volumes?' + 'startIndex=' + this.startIndex  + '&maxResults=' + this.MAX_RESULTS + '&q=';
  searchCache = [];


  totalItems;
  resultArray = [];
  searchValue;
  labelActive;
  error: boolean = false;


  constructor(public router: Router , private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  search(key) {
    this.key = key;
    this.API_URL = 'https://www.googleapis.com/books/v1/volumes?' + 'startIndex=' + this.startIndex  + '&maxResults=' + this.MAX_RESULTS + '&q=';
    if (key.length >= 1) {
      this.resultArray = [];
      console.log(this.searchCache);
      if (this.searchCache[this.startIndex]) {
        this.response = this.searchCache[this.startIndex];
        this.totalItems = this.searchCache[this.startIndex].totalItems;
        this.resultArray = this.searchCache[this.startIndex].items;
        this.resultArray.forEach(item => item.modal = false);
      } else {
        this.http.get(this.API_URL + key)
          .subscribe((response: any) => {
            this.searchCache[this.startIndex] = response;
            this.response = response;
            this.totalItems = response.totalItems;
            this.resultArray = response.items;
            this.resultArray.forEach(item => item.modal = false);
            console.log(response);
          });
      }
    } else {
      this.resultArray = [];
    }
  }

  nextPage() {
    const pageIndex = this.startIndex + 1;
    if ( ( pageIndex * this.MAX_RESULTS ) > this.totalItems) {
      alert('You reached last page');
    } else {
      this.startIndex++;
      this.search(this.key);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }

  previousPage() {
    if ((this.startIndex - 1 ) >= 0) {
      this.startIndex--;
      this.search(this.key);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } else {
      alert('You are on the first page!');
    }
  }


  focusFunction() {
    this.labelActive = true;
  }

  focusOutFunction() {
    if (!this.searchValue || this.searchValue.length === 0) {
      this.labelActive = false;
    }
  }


}
