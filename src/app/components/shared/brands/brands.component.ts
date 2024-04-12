import { Component,Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IBrand } from '../../../Models/ibrand';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule,RouterModule,CarouselModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  @Input() brands: IBrand[]=[] ;
  @Input() isSmall=false;
  numOfBrands!: number;
  ngOnInit(): void {
    if (this.isSmall)
      this.numOfBrands=8;
    else
      this.numOfBrands=5
  }
}
