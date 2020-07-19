import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuChoiceComponent } from './sub-menu-choice.component';

describe('SubMenuChoiceComponent', () => {
  let component: SubMenuChoiceComponent;
  let fixture: ComponentFixture<SubMenuChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
