import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderhomeComponent } from './traderhome.component';

describe('TraderhomeComponent', () => {
  let component: TraderhomeComponent;
  let fixture: ComponentFixture<TraderhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraderhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
