import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  username;

  constructor(private router: Router) {
    let localStorageUsername = localStorage.getItem('username');
    if (localStorageUsername === null) {
      this.router.navigate(['/']);
    } else {
      this.username = localStorageUsername;
    }
  }

  assignUsername ( username ) {
    this.username = username;
  }

  getUsername () {
    return this.username;
  }

}
