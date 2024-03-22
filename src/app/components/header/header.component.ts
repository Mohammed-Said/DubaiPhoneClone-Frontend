import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  mobiles: string[] = ['Apple','Samsung','Oppo','Vivo','Realme','Xiaomi','Honor','Huawei','Infinix'];
  tablets: string[] = ['iPad','Samsung Tablet','Realme Tablet','Lenovo','Huawei Tablet','TCL'];

  cartCount:number = 0 ;
dropdownOpen: boolean = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
