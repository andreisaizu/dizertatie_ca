import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhileLessonComponent } from './while-lesson.component';

describe('WhileLessonComponent', () => {
  let component: WhileLessonComponent;
  let fixture: ComponentFixture<WhileLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhileLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhileLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
