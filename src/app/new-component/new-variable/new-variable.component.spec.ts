import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVariableComponent } from './new-variable.component';

describe('NewVariableComponent', () => {
  let component: NewVariableComponent;
  let fixture: ComponentFixture<NewVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
