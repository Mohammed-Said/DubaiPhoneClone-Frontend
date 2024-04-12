import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductService } from '../../../Services/productServices/product.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { SidebarModule } from 'primeng/sidebar';
import { IProductDetails } from '../../../Models/product/iproduct-details';
import { CartService } from '../../../Services/cartServices/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [

    RouterLink,
    MatSidenavModule,
    CommonModule,
    GalleriaModule,
    ImageModule,
    SidebarModule,

  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  showSideCart: boolean = false;

  public product!: IProductDetails;
  public itemId?: number;
  public quantity?: number;
  sub!: Subscription;
  showFiller = false;
  sidebarVisible2: boolean = false;
  sidebarVisible3: boolean = false;
  constructor(
    private _productService: ProductService,
    private route: Router,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = history.state['id'];
    this.sub = this._productService.getProductByID(id).subscribe({
      next: (data) => {
        if (data===null) {
          this.route.navigate(['/NotFound']);
        }
        this.product = data;
        this.product.images.unshift(data.cover);
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
    this._cartService.addToCart(this.product.id);
    // this.sidebarVisible2 = true; // Show sidebar
  }

  public onCloseSidebar() {
    this.sidebarVisible2 = false; // Hide sidebar
  }
}
