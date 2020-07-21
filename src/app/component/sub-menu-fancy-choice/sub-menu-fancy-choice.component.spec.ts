import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuFancyChoiceComponent } from './sub-menu-fancy-choice.component';

describe('SubMenuFancyChoiceComponent', () => {
  let component: SubMenuFancyChoiceComponent;
  let fixture: ComponentFixture<SubMenuFancyChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuFancyChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuFancyChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
