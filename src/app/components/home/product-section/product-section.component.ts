import { Component, Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CardSliderComponent } from '../../shared/card-slider/card-slider.component';
import { IProduct } from '../../../Models/iproduct';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CardSliderComponent ,CardComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent {
@Input() imagePath!:string;
@Input() title!:string;
@Input() products!:IProduct[];
}
