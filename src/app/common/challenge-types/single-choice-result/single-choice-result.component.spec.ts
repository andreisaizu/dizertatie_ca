import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChoiceResultComponent } from './single-choice-result.component';

describe('SingleChoiceResultComponent', () => {
  let component: SingleChoiceResultComponent;
  let fixture: ComponentFixture<SingleChoiceResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleChoiceResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleChoiceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
