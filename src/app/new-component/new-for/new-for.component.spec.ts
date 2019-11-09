import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForComponent } from './new-for.component';

describe('NewForComponent', () => {
  let component: NewForComponent;
  let fixture: ComponentFixture<NewForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
