import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictedSquadComponent } from './predicted-squad.component';

describe('PredictedSquadComponent', () => {
  let component: PredictedSquadComponent;
  let fixture: ComponentFixture<PredictedSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictedSquadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictedSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
