import { Component } from '@angular/core';
import { CardSliderComponent } from '../../../components/shared/card-slider/card-slider.component';
import { GalleriaModule } from 'primeng/galleria';
import { GalleriaBasicDemoComponent } from '../../test/galleria-basic-demo/galleria-basic-demo.component';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CardSliderComponent,GalleriaBasicDemoComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  
})
export class DetailsComponent {
  public itemimg =["../../../../assets/Images/xiaomi/Xiaomi-Redmi-Note-13-Dual-Sim-256GB-8GB-Ram-4G_3978_2-768x768.png",
                  "../../../../assets/Images/xiaomi/2956-768x768.png"
                  ]
  public itemname="Xiaomi Redmi Note 13 Dual Sim – 256GB, 8GB Ram, 4G";
  public price=10.77
  public nprice=12.88
  public checked=true
  
  public AddtoWichlist(){
    document.getElementById("hart")?.classList.replace("bi-heart","bi-heart-fill")
  }
}

