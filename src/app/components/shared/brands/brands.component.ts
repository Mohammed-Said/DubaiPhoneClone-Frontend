import { Component,Input } from '@angular/core';
import { CardSliderComponent } from '../card-slider/card-slider.component';
import { CommonModule } from '@angular/common';
import { IBrand } from '../../../Models/ibrand';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CardSliderComponent,CommonModule,RouterModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  @Input() brands: IBrand[]=[] ;
  @Input() isSmall=false;

  ngOnInit(): void {

  }
}
