import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { RouterModule } from '@angular/router';
import { IProduct } from '../../../Models/product/iproduct';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() isGridOne=false
@Input() product!:IProduct;
}
