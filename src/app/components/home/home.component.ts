import { Component, Input, OnInit } from '@angular/core';
import { CategoriesComponent } from '../shared/categories/categories.component';
import { BrandsComponent } from '../shared/brands/brands.component';
import { CardComponent } from '../shared/card/card.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { BrandService } from '../../Services/brandServices/brand.service';
import { CategoryService } from '../../Services/category.services/category.service';
import { ProductService } from '../../Services/productServices/product.service';
import { ICategory } from '../../Models/icategory';
import { IBrand } from '../../Models/ibrand';

import { LeftSideComponent } from "../left-side/left-side.component";
import { IProduct } from '../../Models/product/iproduct';
import { LandingComponent } from "./landing/landing.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        CategoriesComponent,
        BrandsComponent,
        CardComponent,
        ProductSectionComponent,
        LeftSideComponent,
        LandingComponent
    ]
})
export class HomeComponent {
  Categories: ICategory[] = [];
  Brands: IBrand[] = [];
  Products: IProduct[] = [];

  constructor(
    private _brandService: BrandService,
    private _categoryService: CategoryService,
    private _productService: ProductService
  ) {}
  ngOnInit() {

    this._productService.getALLProducts().subscribe({next:(prods)=>
      {
        console.log(prods);
        this.Products=prods;

      }

    })


      this._brandService.getBrands().subscribe({
        next: (brands) => {
          this.Brands = brands;
        },
      });


      this._categoryService.getAllBrands().subscribe({
        next: (categories) => {
          this.Categories = categories;
        },
      });

    }

  }



