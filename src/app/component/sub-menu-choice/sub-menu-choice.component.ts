import { Component, OnInit, Input } from '@angular/core';
import { SubMenuItem } from 'src/app/models/sub-menu-item';

@Component({
  selector: 'app-sub-menu-choice',
  templateUrl: './sub-menu-choice.component.html',
  styleUrls: ['./sub-menu-choice.component.scss']
})
export class SubMenuChoiceComponent implements OnInit {

  @Input() subTitle: string;
  @Input() menuItems: SubMenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
