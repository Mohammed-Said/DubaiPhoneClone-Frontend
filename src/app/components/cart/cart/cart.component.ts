import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
public cartitems:number=2
//public itemname:string="Xiaomi Redmi Note 13 Dual Sim - 256GB, 8GB Ram, 4G - Black"
public price:number=10.777
public imagelink:string="https://th.bing.com/th/id/R.69a3d58caa03e7d79b904798030b545c?rik=Hm8sIx89ARlERA&pid=ImgRaw&r=0"
///////////////////////////////////////////////////////////////////////////////
public cartItem: any | null = null;
  public itemname?:string
  public itemprice?:string

  constructor() { 
    
  }

  ngOnInit(): void {
    this.getCartItemFromLocalStorage();
    //this.itemname=this.cartItem?.itemname;
    //this.itemprice=this.cartItem?.nprice;
  }

  getCartItemFromLocalStorage(): void {
    const cartItemJSON = localStorage.getItem('cartItem');

    if (cartItemJSON) {
      try {
        // Parse JSON string into an object
        this.cartItem = JSON.parse(cartItemJSON);
      //  this.itemname=this.cartItem.itemname;
        console.log(this.cartItem);
      } catch (error) {
        console.error('Error parsing cartItem JSON:', error);
      }
    }
  }


}
