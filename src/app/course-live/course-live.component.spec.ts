import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLiveComponent } from './course-live.component';

describe('CourseLiveComponent', () => {
  let component: CourseLiveComponent;
  let fixture: ComponentFixture<CourseLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseLiveComponent]
    });
    fixture = TestBed.createComponent(CourseLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
