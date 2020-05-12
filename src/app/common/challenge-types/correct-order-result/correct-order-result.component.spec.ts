import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectOrderResultComponent } from './correct-order-result.component';

describe('CorrectOrderResultComponent', () => {
  let component: CorrectOrderResultComponent;
  let fixture: ComponentFixture<CorrectOrderResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectOrderResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectOrderResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
