import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubMenuItem } from 'src/app/models/sub-menu-item';
import { faHome, faAngleDoubleLeft  } from '@fortawesome/free-solid-svg-icons';
import {SubMenu} from "../../models/sub-menu";
import {Menu} from "../../models/menu";
import menulist from "../../_files/menulist.json";
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  newMenuItems: Menu[] = menulist;
  menu: Menu;

  faCoffee = faAngleDoubleLeft ;

  imageObject: Array<object> = [
  ];

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

  fancyMenuItems: SubMenuItem[] = [
    new SubMenuItem('12" Pizza', 'https://i.imgur.com/Aowufa1.jpg', 1000, 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis'),
    new SubMenuItem('Meat', 'https://i.imgur.com/YkDi8Nb.jpg', 2000, 'periam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis'),
  ];

  fancyHorizontalMenuItems: SubMenuItem[] = [
    new SubMenuItem('12" Pizza', 'https://i.imgur.com/Aowufa1.jpg', 1000, 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis'),
    new SubMenuItem('Meat', 'https://i.imgur.com/YkDi8Nb.jpg', 2000, 'periam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis'),
    new SubMenuItem('12" Pizza', 'https://i.imgur.com/Aowufa1.jpg', 1000, 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis'),
    new SubMenuItem('Meat', 'https://i.imgur.com/YkDi8Nb.jpg', 2000, 'periam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis'),
    new SubMenuItem('12" Pizza', 'https://i.imgur.com/Aowufa1.jpg', 1000, 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis'),
    new SubMenuItem('Meat', 'https://i.imgur.com/YkDi8Nb.jpg', 2000, 'periam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis'),
  ];

  title: string;

  constructor(private activatedRoute: ActivatedRoute, private db: AngularFirestore, private dataService: DataService) {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
    // this.menu = this.newMenuItems[this.title];
    this.menu = this.dataService.menus[this.title];

    console.log(this.menu.menu);

    this.db.collection('menus').doc(this.menu.menu).snapshotChanges()
      .pipe(map((result) => {
          const data = result.payload.data()['imagePaths'];
          console.log(data);
          if (data) {
            data.forEach((imagePath, index) => {
              // if(index == 0) {
              //   this.imageObject.push(
              //     {
              //       image: imagePath,
              //       thumbImage: imagePath
              //     }
              //   );
              // }
              if(imagePath != "") {
                this.imageObject.push(
                  {
                    image: imagePath,
                    thumbImage: imagePath
                  }
                );
              }
              
            });
          }
      })).subscribe();
  }

  ngOnInit(): void {
  }

}
