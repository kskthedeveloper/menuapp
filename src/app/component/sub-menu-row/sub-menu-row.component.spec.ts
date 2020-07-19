import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuRowComponent } from './sub-menu-row.component';

describe('SubMenuRowComponent', () => {
  let component: SubMenuRowComponent;
  let fixture: ComponentFixture<SubMenuRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
