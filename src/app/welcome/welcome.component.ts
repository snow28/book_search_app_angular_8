import { Component, OnInit , Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsernameService } from '../username.service.js';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})

@Injectable({
  providedIn: 'root'
})

export class WelcomeComponent implements OnInit {

  labelActive: boolean = false;
  username: any;
  error: boolean = false;

  constructor(private router: Router , private usernameService: UsernameService , private headerComponent : HeaderComponent) { }

  ngOnInit(): void {

  }

  keyup () {

  }

  focusFunction () {
    this.labelActive = true;
  }

  focusOutFunction () {
    if (!this.username || this.username.length === 0) {
      this.labelActive = false;
    }
  }

  submit () {
    if (this.username && this.username.length >= 2) {
      localStorage.setItem('username' , this.username);
      this.usernameService.assignUsername(this.username);
      this.headerComponent.updateUsername(this.username);
      this.router.navigate(['/search']);
    } else {
      this.error = true;
    }
  }

}
