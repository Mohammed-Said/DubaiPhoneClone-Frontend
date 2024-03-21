import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CardComponent } from '../shared/card/card.component';
import { BrandsComponent } from '../shared/brands/brands.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  standalone: true,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  imports: [DropdownModule, CardComponent, BrandsComponent, BrandsComponent],
})
export class ProductsPageComponent implements OnInit {
  category:any[]=['mobile','laptop'];
  brands:any[]=['samsung','apple'];
  constructor(private activatedRoute: ActivatedRoute,private router :Router) {}
  ngOnInit(): void {
    this.category.find((c)=>c==this.activatedRoute.snapshot.params['category'])
    if(! this.category.some((c)=>c===this.activatedRoute.snapshot.params['category']))
      this.router.navigate(['/NotFound'],);
    if(!this.activatedRoute.snapshot.params['brand'])
      console.log("hello");
  }
  isFilter1 = true;
  sorts: any[] = [
    { name: 'steak-0' },
    { name: 'pizza-1' },
    { name: 'tacos-2' },
  ];
  @Input() products: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
}
