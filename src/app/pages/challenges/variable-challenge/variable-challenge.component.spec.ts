import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableChallengeComponent } from './variable-challenge.component';

describe('VariableChallengeComponent', () => {
  let component: VariableChallengeComponent;
  let fixture: ComponentFixture<VariableChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
