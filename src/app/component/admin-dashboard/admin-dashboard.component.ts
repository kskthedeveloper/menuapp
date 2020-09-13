import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../service/data.service';
import {Menu} from '../../models/menu';
import {SubMenu} from '../../models/sub-menu';
import {Item} from '../../models/item';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public items: Observable<any[]>;
  menus: Menu[] = [];

  constructor(private db: AngularFirestore,
              private dataService: DataService,
              private http: HttpClient,
              private auth: AuthService) {
    // need to check every menus
  }

  ngOnInit(): void {
    this.parseData2();

    this.items = this.db.collection('menus').valueChanges();
    console.log(this.items);
  }

  async getData() {
    // return await this.http.get('https://sheets.googleapis.com/v4/spreadsheets/1qah_vgDaFV6D1nRaR57u_gMHj6nHjj0CAoAjxogFG1A?key=AIzaSyDexVQOiKJpSrOLBrsIdBWUEkkHGsu61Do&ranges=A2:E&includeGridData=false&fields=properties.title,sheets(properties,data.rowData.values(effectiveValue))');
    return await this.http.get('https://sheets.googleapis.com/v4/spreadsheets/1qah_vgDaFV6D1nRaR57u_gMHj6nHjj0CAoAjxogFG1A/values/Sheet1!A2:E?key=AIzaSyDexVQOiKJpSrOLBrsIdBWUEkkHGsu61Do&majorDimension=ROWS');
  }

  async parseData2(): Promise<Menu[]> {

    let menu: Menu;
    let submenu: SubMenu;

    if (this.menus === undefined || this.menus.length === 0) {
      (await this.getData()).subscribe((data) => {
        data['values'].forEach(value => {
          if(value[0] != "-") {
            menu = new Menu(value[0], []);
            this.menus.push(menu);
          } else {

            if(value[1] != "-") {
              submenu = new SubMenu(value[1] == "submenu" ? "" : value[1], new Array());
              menu.submenu.push(submenu);
            } else {
              let item: Item = new Item(value[2], value[3] == "-" ? "" : value[3], value[4] == "-" ? "" : value[4]);
              submenu.items.push(item);
            }

          }
        });
        this.printMenus();
      });
    }

    return this.menus;
  }

  async createMenus() {
    this.parseData2().then((value) => {
      console.log(value);
      console.log(value.length);
    })
    // this.db.collection('menus')
  }

  printMenus() {
    console.log("printing");
    console.log(this.menus);
    console.log(this.menus.length);
    this.dataService.menus.forEach((menu) => {
      console.log(menu.menu);
    });
  }

  logout() {
    this.auth.logout()
  }

}
