import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../models/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  menuItems: MenuItem[] = [
    new MenuItem('Appetizers', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg'),
    new MenuItem('Sides', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg'),
    new MenuItem('Barbecue', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg'),
    new MenuItem('Main Dishes', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg'),
    new MenuItem('Lunch Set', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg'),
    new MenuItem('Drinks', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg'),
    new MenuItem('Menu7', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg'),
    new MenuItem('Menu8', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toSubMenu(title: string) {

  }
}
