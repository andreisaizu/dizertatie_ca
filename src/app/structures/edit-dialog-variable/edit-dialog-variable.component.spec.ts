import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogVariableComponent } from './edit-dialog-variable.component';

describe('EditDialogVariableComponent', () => {
  let component: EditDialogVariableComponent;
  let fixture: ComponentFixture<EditDialogVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDialogVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
