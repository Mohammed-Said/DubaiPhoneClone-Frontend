import { Component, Input, OnInit } from '@angular/core';
import { DemoDirective } from '../demo.directive';



@Component({
  selector: 'app-galleria-basic-demo',
  standalone: true,
  imports: [DemoDirective],
  templateUrl: './galleria-basic-demo.component.html',
  styleUrl: './galleria-basic-demo.component.css',

})
export class GalleriaBasicDemoComponent  {
  @Input() image!: string;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.image);
  }
}
