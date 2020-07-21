import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubMenuItem } from 'src/app/models/sub-menu-item';
import { faHome, faAngleDoubleLeft  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  faCoffee = faAngleDoubleLeft ;

  smenuItems: SubMenuItem[] = [
    new SubMenuItem('Appetizers', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg', 1000, ""),
    new SubMenuItem('Sides', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg', 2000, ''),
    new SubMenuItem('Barbecue', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg', 3000, ''),
    new SubMenuItem('Main Dishes', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg', 4000, ''),
    new SubMenuItem('Lunch Set', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg', 5000, ''),
    new SubMenuItem('Drinks', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg', 6000, ''),
    new SubMenuItem('Menu7', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg', 7000, ''),
    new SubMenuItem('Menu8', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg', 8000, ''),
  ];

  fmenuItems: SubMenuItem[] = [
    new SubMenuItem('Pork Barbecue', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg', 1000, 'Made with fresh'),
    new SubMenuItem('Chicken Barbecue', 'https://www.delonghi.com/Global/recipes/multifry/97.jpg', 2000, 'Made with fresh'),
  ];

  title: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
  }

  ngOnInit(): void {
  }

}
