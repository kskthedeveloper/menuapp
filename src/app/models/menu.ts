import {SubMenu} from "./sub-menu";

export class Menu {
  constructor(public menu: string,
              public submenu: SubMenu[]) {}
}
