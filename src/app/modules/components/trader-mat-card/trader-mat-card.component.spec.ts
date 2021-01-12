import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderMatCardComponent } from './trader-mat-card.component';

describe('TraderMatCardComponent', () => {
  let component: TraderMatCardComponent;
  let fixture: ComponentFixture<TraderMatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraderMatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderMatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
