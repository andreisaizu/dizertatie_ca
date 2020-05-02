import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractInstructionComponent } from './abstract-instruction.component';

describe('AbstractInstructionComponent', () => {
  let component: AbstractInstructionComponent;
  let fixture: ComponentFixture<AbstractInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
