import { CommonModule } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { CartService } from '../../Services/cartServices/cart.service';
import { ProductService } from '../../Services/productServices/product.service';
import { IProductCart } from '../../Models/CartItem/iproduct-cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent  {
  cart:IProductCart[]=[];
  constructor(private _cartService: CartService) {
    _cartService.getCartProducts().subscribe(products => {
      this.cart = products;
      _cartService.AddQuantity(this.cart);
    });
  }
  createRange(number:number){
    // return new Array(number);
    return new Array(number);
  }

}
