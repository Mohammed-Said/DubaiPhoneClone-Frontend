import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-autosize-example',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './sidenav-autosize-example.component.html',
  styleUrl: './sidenav-autosize-example.component.css'
})
export class SidenavAutosizeExampleComponent {
  showFiller = false;
  opened=false;
}
