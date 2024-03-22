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
public itemname:string="Xiaomi Redmi Note 13 Dual Sim - 256GB, 8GB Ram, 4G - Black"
public price:number=10.777
public imagelink:string="https://th.bing.com/th/id/R.69a3d58caa03e7d79b904798030b545c?rik=Hm8sIx89ARlERA&pid=ImgRaw&r=0"
}
