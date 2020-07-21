import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuHorizontalLargeCardComponent } from './sub-menu-horizontal-large-card.component';

describe('SubMenuHorizontalLargeCardComponent', () => {
  let component: SubMenuHorizontalLargeCardComponent;
  let fixture: ComponentFixture<SubMenuHorizontalLargeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuHorizontalLargeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuHorizontalLargeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
