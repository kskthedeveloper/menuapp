import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVerticalComponent } from './home-vertical.component';

describe('HomeVerticalComponent', () => {
  let component: HomeVerticalComponent;
  let fixture: ComponentFixture<HomeVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
