import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  mobiles: string[] = [
    'Apple',
    'Samsung',
    'Oppo',
    'Vivo',
    'Realme',
    'Xiaomi',
    'Honor',
    'Huawei',
    'Infinix',
  ];
  tablets: string[] = [
    'iPad',
    'Samsung Tablet',
    'Realme Tablet',
    'Lenovo',
    'Huawei Tablet',
    'TCL',
  ];
  mainBrands: string[] = [
    'Apple',
    'Samsung',
    'Lenovo',
    'Huawei',
    'LG',
    'Xiaomi',
    'Oppo',
  ];
  otherBrands: string[] = [
    'Dell',
    'HP',
    'Acer',
    'Sony',
    'Anker',
    'Asus',
    'Honor',
  ];
  laptop: string[] = ['ASUS', 'Dell', 'HP', 'Lenovo', 'Apple'];
  printers: string[] = ['HP Printers', 'Epson Printers'];
  Tvs: string[] = ['Samsung TV', 'LG TV', 'Rowa', 'Castle', 'ATA', 'ULTRA'];
  monitors: string[] = ['LG Monitors'];
  games: string[] = [
    'PS Consoles',
    'Games CDs',
    'Games Accessories',
    'Gaming Headset',
    'Gaming Mouse & Keyboard',
    'Scooters',
  ];
  mobileAccessories: string[] = [
    'Smart Watch',
    'Sound & TWS',
    'Power Bank',
    'Cables & docks',
    'Covers',
    'Screen Protector',
    'Mobile Sound & Headset',
  ];
  laptopsAccessories: string[] = [
    'Bags',
    'Keybord & Mouse',
    'Memories & Flashs',
    'Power & Batteries',
    'Sound & Headset',
  ];
  otherAccessories: string[] = [
    'Home Appliances',
    'Personal Care',
    'Speakers',
    'Health equipment',
    'Car Solution',
    'Others',
  ];
  kitchenAppliances: string[] = [
    'Air Fryer',
    'Microwaves',
    'Waffle & Sandwich Maker',
    'Blenders & Mixers',
    'Kettle & Coffee Maker',
  ];
  smallAppliances: string[] = ['Vacuum', 'Irons', 'Heater'];
  cartCount: number = 0;
  isDropdownOpen: boolean = false;

  btns!: NodeListOf<HTMLElement>;

  ngAfterViewInit(): void {
    this.btns = document.querySelectorAll('.toggle-btn');
    console.log(this.btns);
  }
  toggleDropdown(e: Event) {
    this.btns.forEach((item: HTMLElement) => {
      if (item === (e.currentTarget as HTMLElement)) {
        return;
      }
      item.classList.remove('menu-toggle');
    });
    this.isDropdownOpen =(e.currentTarget as HTMLElement).classList.toggle('menu-toggle');
  }
  closeMenu(){
    this.isDropdownOpen = false;
    this.btns.forEach((item: HTMLElement) =>
      item.classList.remove('menu-toggle')
    );
  }
}
