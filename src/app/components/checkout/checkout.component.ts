import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  ShippingMethod(e:Event){
    ((e.currentTarget as HTMLElement).querySelector('input') as HTMLInputElement ).checked=true;
    ((e.currentTarget as HTMLElement).parentElement as HTMLElement).querySelectorAll('.shipping-method > div').forEach(d=>{
      d.classList.remove('selected-shipping-method');
    });
    (e.currentTarget as HTMLElement).classList.add('selected-shipping-method');
  }
}
