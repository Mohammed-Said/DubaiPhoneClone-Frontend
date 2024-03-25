import { Component, Input, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { GalleriaBasicDemoComponent } from '../../test/galleria-basic-demo/galleria-basic-demo.component';
import { CardSliderComponent } from '../../card-slider/card-slider.component';
import { IProduct } from '../../../../Models/iproduct';
import { Router } from '@angular/router';
import { ProductService } from '../../../../Services/productServices/product.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [GalleriaBasicDemoComponent,CardSliderComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',

})
export class DetailsComponent implements OnInit {

  product!:IProduct;
  constructor(private _productService: ProductService) {
  }
  ngOnInit(): void {
    let id=history.state.id;
    this._productService.getProductByID(id).subscribe({next:(prd)=>{
      this.product = prd;
    }})
    console.log();
  }


  public itemimg =["../../../../assets/Images/xiaomi/Xiaomi-Redmi-Note-13-Dual-Sim-256GB-8GB-Ram-4G_3978_2-768x768.png",
                  "../../../../assets/Images/xiaomi/2956-768x768.png"
                  ]
  // public itemname="Xiaomi Redmi Note 13 Dual Sim – 256GB, 8GB Ram, 4G";
  // public price=10.77
  // public nprice=12.88
  public checked=true

  public AddtoWichlist(){
    document.getElementById("hart")?.classList.replace("bi-heart","bi-heart-fill")
  }
}

