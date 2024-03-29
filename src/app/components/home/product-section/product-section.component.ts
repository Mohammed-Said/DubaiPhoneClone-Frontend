import { AfterViewInit, Component, Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { CardSliderComponent } from '../../shared/card-slider/card-slider.component';
import { IProduct } from '../../../Models/product/iproduct';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CardSliderComponent ,CardComponent,CarouselModule],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent implements AfterViewInit {

responsiveOptions: any[] | undefined;
@Input() imagePath!:string;
@Input() title!:string;
@Input() products!:IProduct[];

ngAfterViewInit(): void {

  this.responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];
}
}
