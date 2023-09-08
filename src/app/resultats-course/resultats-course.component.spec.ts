import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsCourseComponent } from './resultats-course.component';

describe('ResultatsCourseComponent', () => {
  let component: ResultatsCourseComponent;
  let fixture: ComponentFixture<ResultatsCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultatsCourseComponent]
    });
    fixture = TestBed.createComponent(ResultatsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
