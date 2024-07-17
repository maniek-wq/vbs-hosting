import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRowComponent } from './new-row.component';

describe('NewRowComponent', () => {
  let component: NewRowComponent;
  let fixture: ComponentFixture<NewRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
