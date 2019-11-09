import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVariableListComponent } from './new-variable-list.component';

describe('NewVariableListComponent', () => {
  let component: NewVariableListComponent;
  let fixture: ComponentFixture<NewVariableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVariableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVariableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
