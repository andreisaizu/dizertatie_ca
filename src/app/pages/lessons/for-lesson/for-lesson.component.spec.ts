import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLessonComponent } from './for-lesson.component';

describe('ForLessonComponent', () => {
  let component: ForLessonComponent;
  let fixture: ComponentFixture<ForLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
