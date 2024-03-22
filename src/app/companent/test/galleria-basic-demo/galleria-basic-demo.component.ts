import { Component, OnInit } from '@angular/core';
import { DemoDirective } from '../demo.directive';



@Component({
  selector: 'app-galleria-basic-demo',
  standalone: true,
  imports: [DemoDirective],
  templateUrl: './galleria-basic-demo.component.html',
  styleUrl: './galleria-basic-demo.component.css',
    
})
export class GalleriaBasicDemoComponent  {
  
}