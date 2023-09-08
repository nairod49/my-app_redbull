import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotesComponent } from './pilotes.component';

describe('PilotesComponent', () => {
  let component: PilotesComponent;
  let fixture: ComponentFixture<PilotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilotesComponent]
    });
    fixture = TestBed.createComponent(PilotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
