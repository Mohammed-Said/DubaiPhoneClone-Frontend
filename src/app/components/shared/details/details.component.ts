import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardSliderComponent } from '../../../components/shared/card-slider/card-slider.component';

import { GalleriaBasicDemoComponent } from '../../test/galleria-basic-demo/galleria-basic-demo.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductService } from '../../../Services/productServices/product.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../../../Models/product/iproduct';
import { CartService } from '../../../Services/cartServices/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CardSliderComponent,
    GalleriaBasicDemoComponent,
    RouterLink,
    MatSidenavModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit, OnDestroy {
  public itemimg = [
    '../../../../assets/Images/xiaomi/Xiaomi-Redmi-Note-13-Dual-Sim-256GB-8GB-Ram-4G_3978_2-768x768.png',
    '../../../../assets/Images/xiaomi/2956-768x768.png',
  ];
  public itemname = 'Xiaomi Redmi Note 13 Dual Sim – 256GB, 8GB Ram, 4G';
  public price = 10.77;
  public nprice = 12.88;
  public checked = true;
  public productdetalis?: IProduct;
  public quantity?: number;
  sub!: Subscription;
  showFiller = false;

  constructor(
    private productservice: ProductService,
    private route: ActivatedRoute,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = history.state['id'];
    this.sub = this.productservice.getProductByID(id).subscribe({
      next: (data) => {
        console.log(data);

        this.productdetalis = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public AddtoWichlist() {
    document
      .getElementById('hart')
      ?.classList.replace('bi-heart', 'bi-heart-fill');
  }

  public addtocart() {
    const productDetails = {
      // itemimg: this.itemimg,
      // itemname: this.itemname,
      // price: this.price,
      // nprice: this.nprice,
      // checked: this.checked
      Id: this.productdetalis?.id,
      quantity: this.quantity,
    };

    const productDetailsJSON = JSON.stringify(productDetails);

    localStorage.setItem('cartItem', productDetailsJSON);

    alert('Product added to cart!');
  }
}
