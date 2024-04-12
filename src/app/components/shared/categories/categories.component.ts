import { Component, Input } from '@angular/core';

import { ICategory } from '../../../Models/icategory';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule,CarouselModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
@Input() Categories: ICategory[] =[];

  ngOnInit(): void {

  }
}
