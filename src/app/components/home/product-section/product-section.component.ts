import { Component, Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CardSliderComponent } from '../../shared/card-slider/card-slider.component';

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
@Input() products:any=[1,2,3,4,5,6,7,8,9,10];
}
