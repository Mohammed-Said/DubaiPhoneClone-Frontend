import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CardComponent } from '../shared/card/card.component';
import { BrandsComponent } from '../shared/brands/brands.component';
import { ActivatedRoute, Router,  } from '@angular/router';

import { IBrand } from '../../Models/ibrand';

import { ICategory } from '../../Models/icategory';
import { BrandService } from '../../Services/brandServices/brand.service';
import { CategoryService } from '../../Services/category.services/category.service';
import { CategoriesComponent } from '../shared/categories/categories.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  imports: [DropdownModule, CardComponent, BrandsComponent, BrandsComponent,CategoriesComponent]
})
export class ProductsPageComponent implements OnInit {
  categories: ICategory[] = [];
  brands: IBrand[] = [];
  mainUrl: string = '';
  subUrl: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _brandService: BrandService,
    private _categoryService: CategoryService
  ) {}
  ngOnInit() {
    this.mainUrl = this.activatedRoute.snapshot.params['category'];
    this.subUrl = this.activatedRoute.snapshot.params['brand'];
    if(this.router.url.split('/')[1]==='categories'){
      this._brandService.getBrands().subscribe({
        next: (brands) => {
          this.brands = brands;
        },
      });
      this.routeCategoryCheck();
    }else if(this.router.url.split('/')[1]==='brands')
    {
      this._categoryService.getAllBrands().subscribe({
        next: (categories) => {
          this.categories = categories;
        },
      });
      this.routeBrandCheck();
    }
  }
  isFilter1 = true;
  sorts: any[] = [
    { name: 'steak-0' },
    { name: 'pizza-1' },
    { name: 'tacos-2' },
  ];
  products: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  @ViewChild('ProductGrid') productGrid!: ElementRef;

  handleGrid(e: Event) {
    let img = ((e.target as HTMLElement).querySelector('img') ??
      (e.target as HTMLElement)) as HTMLImageElement;
    this.isFilter1 = !this.isFilter1;
    if (this.isFilter1) {
      img.src = 'assets/Images/filter.svg';
      this.productGrid.nativeElement.className = 'products-grid';
    } else {
      img.src = 'assets/Images/filter-2.svg';
      this.productGrid.nativeElement.className = 'products-grid-one';
    }
  }

  routeCategoryCheck() {
    let isCorrect = false;
    if (this.mainUrl !== undefined && this.subUrl !== undefined) {
      this._categoryService.getAllCategoriesWithBrands().subscribe({
        next: (categories: ICategory[]) => {
          categories.forEach((category: ICategory) => {
            if (
              category.name.split(' ').join('').toLowerCase() === this.mainUrl
            ) {
              if (
                category.brands?.some(
                  (brands) => brands.toLowerCase() === this.subUrl
                )
              )
                isCorrect = true;
            }
          });
          if (!isCorrect) this.router.navigate(['/NotFound']);
        },
      });
    } else if (this.mainUrl !== undefined) {
      this._categoryService.getAllCategoriesWithBrands().subscribe({
        next: (categories: ICategory[]) => {
          categories.forEach((category: ICategory) => {
            if (
              category.name.split(' ').join('').toLowerCase() === this.mainUrl
            ) {
              isCorrect = true;
            }
          });
          if (!isCorrect) this.router.navigate(['/NotFound']);
        },
      });
    }
  }
  routeBrandCheck() {
    let isCorrect = false;
    if (this.mainUrl !== undefined && this.subUrl !== undefined) {
      this._brandService.GetAllBrandsWithCategories().subscribe({
        next: (brands: IBrand[]) => {
          brands.forEach((brand: IBrand) => {
            if (brand.name.split(' ').join('').toLowerCase() === this.subUrl) {
              if (
                brand.categories?.some(
                  (category) => category.toLowerCase() === this.mainUrl
                )
              )
                isCorrect = true;
            }
          });
          if (!isCorrect) this.router.navigate(['/NotFound']);
        },
      });
    }
    else if (this.mainUrl!== undefined) {
    this._brandService.GetAllBrandsWithCategories().subscribe({
        next: (brands: IBrand[]) => {
          brands.forEach((brand: IBrand) => {
            if (brand.name.split(' ').join('').toLowerCase() === this.mainUrl) {
              isCorrect = true;
            }
          });
          if (!isCorrect) this.router.navigate(['/NotFound']);
        },
      });
    }

  }
}
