import { AfterViewInit, Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BottomFootetrComponent } from './components/bottom-footetr/bottom-footetr.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, ProductsPageComponent,BottomFootetrComponent,MatSlideToggleModule,RouterModule]
})
export class AppComponent {
  title = 'DubaiPhoneClone';

  constructor() {}



}
