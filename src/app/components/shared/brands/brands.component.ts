import { Component } from '@angular/core';
import { CardSliderComponent } from '../card-slider/card-slider.component';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CardSliderComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  brands: any ;

  ngOnInit(): void {

    this.brands=[
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "apple-new-1.png",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "xiaomi-new.png",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "asus-new.png",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "honor.png",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "hp-new.png",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "huawei-new.png",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "lenovo-new.png",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "oppo-new.png",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "realme-logo-1-1.png",
      },
      {
        "id": 1,
        "name": "Best Seller",
        "arabicName": "Electronics",
        "image": "xiaomi-new.png",
      },
    ]
  }
}
