import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayLessonComponent } from './array-lesson.component';

describe('ArrayLessonComponent', () => {
  let component: ArrayLessonComponent;
  let fixture: ComponentFixture<ArrayLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
