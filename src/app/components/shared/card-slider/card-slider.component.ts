import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-card-slider',
  standalone: true,
  imports: [CardSliderComponent,CommonModule],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.css',
})
export class CardSliderComponent implements AfterViewInit, OnDestroy {
  constructor() {
    document.addEventListener('mouseup', () => {
      this.isDragging = false;
      this.carousel.nativeElement.classList.remove('dragging');
    });
  }
  ngAfterViewInit(): void {
    // this.insertCardCopies();
    // this.autoPlay();

  }

  isDragging = false;
  @Input() isAutoPlay : boolean=true;
  @Input() isSmall: boolean=false;
  startX!: number;
  startScrollLeft!: number;
  timeoutId: any;

  @ViewChild('carousel') carousel!: ElementRef<HTMLElement>;

  dragStart(e: MouseEvent) {
    this.isDragging = true;
    this.carousel.nativeElement.classList.add('dragging');

    // Record initial cursor and scroll position
    this.startX = e.pageX;
    this.startScrollLeft = this.carousel.nativeElement.scrollLeft;
  }
  dragging(e: MouseEvent) {
    if (!this.isDragging) return;

    this.carousel.nativeElement.scrollLeft =
      this.startScrollLeft - (e.pageX - this.startX);
  }
  dragStop() {
    this.isDragging = false;
    this.carousel.nativeElement.classList.remove('dragging');
  }
  infiniteScroll() {
    if (this.carousel.nativeElement.scrollLeft === 0) {
      this.carousel.nativeElement.classList.add('no-transition');
      this.carousel.nativeElement.scrollLeft =
        this.carousel.nativeElement.scrollWidth -
        2 * this.carousel.nativeElement.offsetWidth;
      this.carousel.nativeElement.classList.remove('no-transition');
    } else if (
      Math.ceil(this.carousel.nativeElement.scrollLeft) ===
      this.carousel.nativeElement.scrollWidth -
        this.carousel.nativeElement.offsetWidth
    ) {
      this.carousel.nativeElement.classList.add('no-transition');
      this.carousel.nativeElement.scrollLeft =
        this.carousel.nativeElement?.offsetWidth;
      this.carousel.nativeElement.classList.remove('no-transition');
    }
    clearTimeout(this.timeoutId);
    if(!this.carousel.nativeElement.matches(":hover")) this.autoPlay();
  }
  autoPlay()  {
    const firstCardWidth =
      (this.carousel.nativeElement.querySelector('.item') as HTMLElement)
        ?.offsetWidth ?? 0;

    if(!this.isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    this.timeoutId = setTimeout(() => this.carousel.nativeElement.scrollLeft += firstCardWidth +16, 2500) ;

}
  arrowClick(e: Event) {
    const firstCardWidth =
      (this.carousel.nativeElement.querySelector('.item') as HTMLElement)
        ?.offsetWidth ?? 0;

    this.carousel.nativeElement.scrollLeft +=
      (e.target as HTMLElement).id == 'left'
        ? -firstCardWidth -16
        : firstCardWidth + 16;
  }
  clear(){
    clearTimeout(this.timeoutId);
  }
  // Functions for carousel logic
  insertCardCopies = () => {
    const firstCardWidth =
      (this.carousel.nativeElement.querySelector('.item') as HTMLElement)
        .offsetWidth ?? 0;

    const cardPerView = Math.round(
      this.carousel.nativeElement.offsetWidth / firstCardWidth
    );
    const carouselChildren = Array.from(this.carousel.nativeElement.children);

    // Insert copies for infinite scrolling
    carouselChildren
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        this.carousel.nativeElement.insertAdjacentHTML(
          'afterbegin',
          card.outerHTML
        );
      });
    carouselChildren.slice(0, cardPerView).forEach((card) => {
      this.carousel.nativeElement.insertAdjacentHTML(
        'beforeend',
        card.outerHTML
      );
    });
    this.carousel.nativeElement.classList.add('no-transition');
    this.carousel.nativeElement.scrollLeft =
      this.carousel.nativeElement.offsetWidth;
    this.carousel.nativeElement.classList.remove('no-transition');
  };
  ngOnDestroy(): void {
    document.removeEventListener('mouseup', this.dragStop);
  }
}
