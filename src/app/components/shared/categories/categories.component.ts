import { Component, Input } from '@angular/core';
import { CardSliderComponent } from '../card-slider/card-slider.component';
import { ICategory } from '../../../Models/icategory';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CardSliderComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
 @Input() Categories: ICategory[] =[];

  ngOnInit(): void {

  }
}
