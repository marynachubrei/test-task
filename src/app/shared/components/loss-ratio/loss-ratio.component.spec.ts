import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LossRatioComponent } from './loss-ratio.component';

describe('LossRatioComponent', () => {
  let component: LossRatioComponent;
  let fixture: ComponentFixture<LossRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LossRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LossRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
