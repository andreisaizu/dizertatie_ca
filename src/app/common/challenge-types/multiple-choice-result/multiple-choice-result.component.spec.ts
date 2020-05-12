import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceResultComponent } from './multiple-choice-result.component';

describe('MultipleChoiceResultComponent', () => {
  let component: MultipleChoiceResultComponent;
  let fixture: ComponentFixture<MultipleChoiceResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
