import { Component, OnInit, Input } from '@angular/core';
import { SubMenuItem } from 'src/app/models/sub-menu-item';
import {SubMenu} from "../../models/sub-menu";
import {Item} from "../../models/item";

@Component({
  selector: 'app-sub-menu-row',
  templateUrl: './sub-menu-row.component.html',
  styleUrls: ['./sub-menu-row.component.scss']
})
export class SubMenuRowComponent implements OnInit {

  @Input() subTitle: string;
  @Input() menuItems: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
