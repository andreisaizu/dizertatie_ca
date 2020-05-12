import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseResultComponent } from './true-false-result.component';

describe('TrueFalseResultComponent', () => {
  let component: TrueFalseResultComponent;
  let fixture: ComponentFixture<TrueFalseResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueFalseResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFalseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
