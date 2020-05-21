import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNotionComponent } from './basic-notion.component';

describe('BasicNotionComponent', () => {
  let component: BasicNotionComponent;
  let fixture: ComponentFixture<BasicNotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicNotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
