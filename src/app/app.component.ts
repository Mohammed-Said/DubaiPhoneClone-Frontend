import { AfterViewInit, Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BottomFootetrComponent } from './components/bottom-footetr/bottom-footetr.component';


import { HeaderComponent } from "./components/header/header.component";
import { CartComponent } from "./components/cart/cart/cart.component";
import { DetailsComponent } from './components/details/details/details.component';
import { SidenavAutosizeExampleComponent } from './components/shared/sidenav-autosize-example/sidenav-autosize-example.component';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, ProductsPageComponent, BottomFootetrComponent, MatSlideToggleModule, RouterModule,
       DetailsComponent, HeaderComponent, CartComponent,SidenavAutosizeExampleComponent]

})
export class AppComponent {
  title = 'DubaiPhoneClone';

  constructor() {}



}
