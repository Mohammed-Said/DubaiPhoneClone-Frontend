import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { RouterModule } from '@angular/router';

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
