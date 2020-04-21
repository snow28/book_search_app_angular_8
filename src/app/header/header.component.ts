import { Component, OnInit , Input} from '@angular/core';
import { Router , NavigationEnd} from '@angular/router';
import { UsernameService } from '../username.service.js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  username;
  mobileMenuOpened = false;

  constructor(public router: Router , private usernameService: UsernameService) { }

  updateUsername(username) {
    this.username = username;
  }

  hamburgerButtonClick() {
    this.mobileMenuOpened = !this.mobileMenuOpened;
  }

  navClick() {
    if (window.innerWidth < 1150) {
      this.mobileMenuOpened = !this.mobileMenuOpened;
    }
  }

  exit() {
    if (window.innerWidth < 1150) {
      this.mobileMenuOpened = !this.mobileMenuOpened;
    }
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.username = this.usernameService.getUsername();
      }});
  }

}
