import { AfterViewInit, Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BottomFootetrComponent } from './components/bottom-footetr/bottom-footetr.component';

import { CartComponent } from './companent/cart/cart/cart.component';
import { DetailsComponent } from './companent/details/details/details.component';
import { GalleriaBasicDemoComponent } from './companent/test/galleria-basic-demo/galleria-basic-demo.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, ProductsPageComponent,BottomFootetrComponent,MatSlideToggleModule,RouterModule,CartComponent,DetailsComponent,GalleriaBasicDemoComponent]

})
export class AppComponent {
  title = 'DubaiPhoneClone';

  constructor() {}



}
