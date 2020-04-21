import { Component } from '@angular/core';
import {Router} from "@angular/router";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsernameService } from './username.service.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'testExercise';

  constructor() {

  }
}
