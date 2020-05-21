import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableLessonComponent } from './variable-lesson.component';

describe('VariableLessonComponent', () => {
  let component: VariableLessonComponent;
  let fixture: ComponentFixture<VariableLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
