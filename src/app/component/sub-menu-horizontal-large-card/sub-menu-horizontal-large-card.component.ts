import { Component, OnInit, Input } from '@angular/core';
import { SubMenuItem } from 'src/app/models/sub-menu-item';

@Component({
  selector: 'app-sub-menu-horizontal-large-card',
  templateUrl: './sub-menu-horizontal-large-card.component.html',
  styleUrls: ['./sub-menu-horizontal-large-card.component.scss']
})
export class SubMenuHorizontalLargeCardComponent implements OnInit {

  @Input() subTitle: string;
  @Input() menuItems: SubMenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
