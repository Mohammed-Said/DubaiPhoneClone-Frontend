import { Directive ,HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appDemo]',
  standalone: true
})
export class DemoDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  imagechange(){
    var src:any= this.el.nativeElement.src;
    var prev:any=document.getElementById("prev")
     prev.src=src;
     var slide=document.getElementsByClassName("img-slider");
     for(let i=0;i<slide.length;i++){
      slide[i].classList.remove("active")
     }
     this.el.nativeElement.parentElement.classList.add("active")
  }
}
