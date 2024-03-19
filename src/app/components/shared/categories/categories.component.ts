import { Component } from '@angular/core';
import { CardSliderComponent } from '../card-slider/card-slider.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CardSliderComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  Categories: any ;

  ngOnInit(): void {

    this.Categories=[
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "best-seller4.svg",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "play-copy.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "printers-copy.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "tv-copy.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "tws-copy-1.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "laptop-copy.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "mobile-copy.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "best-seller4.svg",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "play-copy.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "printers-copy.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "tv-copy.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "tws-copy-1.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "laptop-copy.webp",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "mobile-copy.webp",
      },

    ]
  }
}
