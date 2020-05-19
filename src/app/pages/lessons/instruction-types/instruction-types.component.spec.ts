import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionTypesComponent } from './instruction-types.component';

describe('InstructionTypesComponent', () => {
  let component: InstructionTypesComponent;
  let fixture: ComponentFixture<InstructionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
