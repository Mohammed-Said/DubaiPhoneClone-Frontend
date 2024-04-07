import { AfterViewInit, Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NavigationEnd, Route, Router, RouterModule, RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { BottomFootetrComponent } from './components/bottom-footetr/bottom-footetr.component';

import { HeaderComponent } from "./components/header/header.component";
import { CartComponent } from "./components/cart/cart/cart.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

    imports: [RouterOutlet, HomeComponent, BottomFootetrComponent, RouterModule, HeaderComponent, CartComponent]

})
export class AppComponent {
  title = 'DubaiPhoneClone';
  showHeader:boolean = true;
  constructor(private router:Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url==='/checkout')
          this.showHeader=false;
        else
        this.showHeader=true;
      }
    });
  }



}
