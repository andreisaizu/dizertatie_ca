import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfLessonComponent } from './if-lesson.component';

describe('IfLessonComponent', () => {
  let component: IfLessonComponent;
  let fixture: ComponentFixture<IfLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
