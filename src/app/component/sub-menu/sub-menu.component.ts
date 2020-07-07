import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  title: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
  }

  ngOnInit(): void {
  }

}
