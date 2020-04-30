import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIfListComponent } from './new-if-list.component';

describe('NewIfListComponent', () => {
  let component: NewIfListComponent;
  let fixture: ComponentFixture<NewIfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
