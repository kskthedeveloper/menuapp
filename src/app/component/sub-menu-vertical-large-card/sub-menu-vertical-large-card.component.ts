import { Component, OnInit, Input } from '@angular/core';
import { SubMenuItem } from 'src/app/models/sub-menu-item';

@Component({
  selector: 'app-sub-menu-vertical-large-card',
  templateUrl: './sub-menu-vertical-large-card.component.html',
  styleUrls: ['./sub-menu-vertical-large-card.component.scss']
})
export class SubMenuVerticalLargeCardComponent implements OnInit {

  @Input() subTitle: string;
  @Input() menuItems: SubMenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
