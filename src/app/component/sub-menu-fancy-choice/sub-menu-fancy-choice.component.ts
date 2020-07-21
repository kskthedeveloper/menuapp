import { Component, OnInit, Input } from '@angular/core';
import { SubMenuItem } from 'src/app/models/sub-menu-item';

@Component({
  selector: 'app-sub-menu-fancy-choice',
  templateUrl: './sub-menu-fancy-choice.component.html',
  styleUrls: ['./sub-menu-fancy-choice.component.scss']
})
export class SubMenuFancyChoiceComponent implements OnInit {

  @Input() subTitle: string;
  @Input() menuItems: SubMenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
