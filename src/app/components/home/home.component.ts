import { Component, OnInit } from '@angular/core';
import { CategoriesComponent } from '../shared/categories/categories.component';
import { BrandsComponent } from '../shared/brands/brands.component';
import { CardComponent } from '../shared/card/card.component';
import { ProductSectionComponent } from './product-section/product-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesComponent,BrandsComponent,CardComponent,ProductSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {


}
