import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { RouterModule } from '@angular/router';
import { IProduct } from '../../../Models/product/iproduct';
import { LocalizationService } from '../../../Services/localiztionService/localization.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterModule,TranslateModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() isGridOne=false
@Input() product!:IProduct;

isArabic!: boolean ;
constructor(private localizationService: LocalizationService
) {
this.localizationService.IsArabic.subscribe(ar=>this.isArabic=ar);

}
}
