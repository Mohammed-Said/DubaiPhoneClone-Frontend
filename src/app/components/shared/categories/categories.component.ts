import { Component, Input } from '@angular/core';
import { CardSliderComponent } from '../card-slider/card-slider.component';
import { ICategory } from '../../../Models/icategory';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CardSliderComponent,RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
 @Input() Categories: ICategory[] =[];

  ngOnInit(): void {

  }
}
