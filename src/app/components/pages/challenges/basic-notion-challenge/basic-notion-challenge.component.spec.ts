import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNotionChallengeComponent } from './basic-notion-challenge.component';

describe('BasicNotionChallengeComponent', () => {
  let component: BasicNotionChallengeComponent;
  let fixture: ComponentFixture<BasicNotionChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicNotionChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNotionChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
