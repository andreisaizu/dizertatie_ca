import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWhileComponent } from './new-while.component';

describe('NewWhileComponent', () => {
  let component: NewWhileComponent;
  let fixture: ComponentFixture<NewWhileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWhileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
