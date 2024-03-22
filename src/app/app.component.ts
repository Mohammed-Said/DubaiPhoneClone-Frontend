import { AfterViewInit, Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './companent/cart/cart/cart.component';
import { DetailsComponent } from './companent/details/details/details.component';
import { GalleriaBasicDemoComponent } from './companent/test/galleria-basic-demo/galleria-basic-demo.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,HomeComponent,CartComponent,DetailsComponent,GalleriaBasicDemoComponent]
})
export class AppComponent {
  title = 'DubaiPhoneClone';

  constructor() {}



}
