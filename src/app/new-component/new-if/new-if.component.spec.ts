import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIfComponent } from './new-if.component';

describe('NewIfComponent', () => {
  let component: NewIfComponent;
  let fixture: ComponentFixture<NewIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
