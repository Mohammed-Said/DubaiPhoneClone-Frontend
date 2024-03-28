import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [GalleriaModule,FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  ngOnInit(): void {
    this.images = [
      'adib-banner-en-web-copy.webp',
      'alex-banner-en-web-copy.webp',
      'home-aman-en-copy.webp',
      'misr-en-924-copy.webp',
      'nbe-banner-en-18-copy.webp',
      'point-banner-en-web-coopy.webp',
      'qnb-n-banner-222-copy.webp',
      'ramadan-offer-banner-en-web-copy2.webp',
      'saib-eng-cop4y.webp',
      'takka-eng-copy.webp'
    ];
  }
  images:string[] = [];
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
}
