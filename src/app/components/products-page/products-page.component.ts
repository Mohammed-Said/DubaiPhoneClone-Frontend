import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CardComponent } from '../shared/card/card.component';
import { BrandsComponent } from '../shared/brands/brands.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { IBrand } from '../../Models/ibrand';

import { ICategory } from '../../Models/icategory';
import { BrandService } from '../../Services/brandServices/brand.service';
import { CategoryService } from '../../Services/category.services/category.service';
import { CategoriesComponent } from '../shared/categories/categories.component';
import { ProductService } from '../../Services/productServices/product.service';

import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { delay } from 'rxjs';
import { IProduct } from '../../Models/product/iproduct';

@Component({
  selector: 'app-products-page',
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  imports: [
    DropdownModule,
    CardComponent,
    BrandsComponent,
    BrandsComponent,
    CategoriesComponent,
    RouterModule,
    FormsModule,
    MatRadioModule,
    MatSliderModule,
    MatCheckboxModule,

  ],
})
export class ProductsPageComponent implements OnInit ,AfterViewInit{
  categories: ICategory[] = [];
  brands: IBrand[] = [];
  mainUrl: string = '';
  firstPartUrl: string = '';
  SecondPartUrl: string = '';
  isFilter1 = true;
  sorts: any[] = [
    { name: 'Sort by price: low to high', value: 1 },
    { name: 'Sort by price: High to low ', value: 2 },
    { name: 'Sort by name: ascending', value: 3 },
    { name: 'Sort by name: descending', value: 4 },
  ];
  stock!: string;
  selectedSort!: string;
  products: IProduct[] = [];
  @ViewChild('ProductGrid') productGrid!: ElementRef;
  @ViewChild('test') test!: ElementRef;


  // infinite scroll
  isLoading: boolean = false;
  currentPage: number = 1;
  itemPerPage: number = 2;
  maxPageNumber!:number;
  c=1;
  toggleIsLoading = () => (this.isLoading = !this.isLoading);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _brandService: BrandService,
    private _categoryService: CategoryService,
    private _productService: ProductService
  ) {}
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting &&!this.isLoading) {
          this.onScroll();
          if (this.maxPageNumber===this.currentPage) {
            observer.unobserve(entry.target);
          }
        }
      });
    },
    );
    observer.observe(this.test.nativeElement);
  }



  ngOnInit() {
    this.mainUrl = this.router.url.split('/')[1];


    //

    //Load the Data
    this.loadData();

    //Handle Route
    if (this.mainUrl === 'category') {
      this.firstPartUrl = this.activatedRoute.snapshot.params['category'];
      this.SecondPartUrl = this.activatedRoute.snapshot.params['brand'];
      this._brandService.getBrands().subscribe({
        next: (brands) => {
          this.brands = brands;
        },
      });
      this.routeCategoryCheck();
    } else if (this.mainUrl === 'brand') {
      this.firstPartUrl = this.activatedRoute.snapshot.params['brand'];
      this._categoryService.getAllBrands().subscribe({
        next: (categories) => {
          this.categories = categories;
        },
      });
      this.routeBrandCheck();
    }

  }

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
    if (this.firstPartUrl !== undefined && this.SecondPartUrl !== undefined) {
      this._categoryService.getAllCategoriesWithBrands().subscribe({
        next: (categories: ICategory[]) => {
          categories.forEach((category: ICategory) => {
            if (
              category.name.split(' ').join('').toLowerCase() ===
              this.firstPartUrl
            ) {
              if (
                category.brands?.some(
                  (brands) => brands.toLowerCase() === this.SecondPartUrl
                )
              )
                isCorrect = true;
            }
          });
          if (!isCorrect) this.router.navigate(['/NotFound']);
        },
      });
    } else if (this.firstPartUrl !== undefined) {
      this._categoryService.getAllCategoriesWithBrands().subscribe({
        next: (categories: ICategory[]) => {
          categories.forEach((category: ICategory) => {
            if (
              category.name.split(' ').join('').toLowerCase() ===
              this.firstPartUrl
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
    if (this.firstPartUrl !== undefined) {
      this._brandService.GetAllBrandsWithCategories().subscribe({
        next: (brands: IBrand[]) => {
          brands.forEach((brand: IBrand) => {
            if (
              brand.name.split(' ').join('').toLowerCase() === this.firstPartUrl
            ) {
              isCorrect = true;
            }
          });
          if (!isCorrect) this.router.navigate(['/NotFound']);
        },
      });
    }
  }
  SortBy(test: any) {
    switch (test.value) {
      case 1:
        this.products.sort((a, b) => a.normalPrice - b.normalPrice);
        break;
      case 2:
        this.products.sort((a, b) => b.normalPrice - a.normalPrice);
        break;
      case 3:
        this.products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 4:
        this.products.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
  }

////////////////////////////////////////////////////////////////

//Infinite Scroll Functions
  loadData()  {
    this.toggleIsLoading();
    this._productService
      .getProductsPagination( this.itemPerPage,this.currentPage)
      .subscribe({
        next: (data: any) => {
          this.products = data.entity;
          this.maxPageNumber = Math.ceil( data.count /this.itemPerPage);
        },
        error: (error) => {
          console.log(error.message);
        },
        complete: () => {
          this.toggleIsLoading();
        },
      });
  };
  appendData(){
    this.toggleIsLoading();
    this._productService
      .getProductsPagination( this.itemPerPage,this.currentPage)
      .pipe(delay(3000))
      .subscribe({
        next: (data: any) => {
          this.products = [...this.products,...data.entity];
        },
        error: (error) => {
          console.log(error.message);
        },
        complete: () => {
          this.toggleIsLoading();
        },
      });
  }
  onScroll(){
    this.currentPage++;
    this.appendData();
  }
}
