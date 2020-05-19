import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNotionsLessonComponent } from './basic-notions-lesson.component';

describe('BasicNotionsLessonComponent', () => {
  let component: BasicNotionsLessonComponent;
  let fixture: ComponentFixture<BasicNotionsLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicNotionsLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNotionsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
