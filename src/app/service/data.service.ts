import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../models/menu';
import { SubMenu } from '../models/sub-menu';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  menus: Menu[] = [];

  constructor(private http: HttpClient) { }

  async getData() {
    // return await this.http.get('https://sheets.googleapis.com/v4/spreadsheets/1qah_vgDaFV6D1nRaR57u_gMHj6nHjj0CAoAjxogFG1A?key=AIzaSyDexVQOiKJpSrOLBrsIdBWUEkkHGsu61Do&ranges=A2:E&includeGridData=false&fields=properties.title,sheets(properties,data.rowData.values(effectiveValue))');
    return await this.http.get('https://sheets.googleapis.com/v4/spreadsheets/1qah_vgDaFV6D1nRaR57u_gMHj6nHjj0CAoAjxogFG1A/values/Sheet1!A2:E?key=AIzaSyDexVQOiKJpSrOLBrsIdBWUEkkHGsu61Do&majorDimension=ROWS');
  }

  async parseData(): Promise<Menu[]> {

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
        })
      });
    }

    return this.menus;

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
        })
      });
    }

    return this.menus;

  }
}
