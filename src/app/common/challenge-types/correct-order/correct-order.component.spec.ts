import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectOrderComponent } from './correct-order.component';

describe('CorrectOrderComponent', () => {
  let component: CorrectOrderComponent;
  let fixture: ComponentFixture<CorrectOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
