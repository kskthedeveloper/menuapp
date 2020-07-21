import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuVerticalLargeCardComponent } from './sub-menu-vertical-large-card.component';

describe('SubMenuVerticalLargeCardComponent', () => {
  let component: SubMenuVerticalLargeCardComponent;
  let fixture: ComponentFixture<SubMenuVerticalLargeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuVerticalLargeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuVerticalLargeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
