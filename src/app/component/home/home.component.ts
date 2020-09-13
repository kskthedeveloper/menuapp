import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../models/menu-item';
import {Menu} from "../../models/menu";
import menulist from "../../_files/menulist.json";
import { DataService } from 'src/app/service/data.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  imageObject: Array<object> = [
  ];

  // newMenuItems: Menu[] = menulist;
  newMenuItems: Menu[];

  constructor(private dataService: DataService,
              private db: AngularFirestore,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) {
    this.db.collection('menus').doc('Home').snapshotChanges()
      .pipe(map((result) => {
          const data = result.payload.data()['imagePaths'];
          console.log(data);
        data.forEach((imagePath, index) => {
            if(index == 0) {
              this.imageObject.push(
                {
                  image: imagePath,
                  thumbImage: imagePath
                }
              );
            }
            this.imageObject.push(
              {
                image: imagePath,
                thumbImage: imagePath
              }
            );
          });
      })).subscribe();

    console.log(this.imageObject);
  }

  ngOnInit(): void {
    this.dataService.parseData().then(data => {
      this.newMenuItems = data;
    });
  }

  toSubMenu(title: string) {

  }
}
