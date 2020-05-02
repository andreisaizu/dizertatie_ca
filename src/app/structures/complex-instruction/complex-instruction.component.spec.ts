import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexInstructionComponent } from './complex-instruction.component';

describe('ComplexInstructionComponent', () => {
  let component: ComplexInstructionComponent;
  let fixture: ComponentFixture<ComplexInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
