import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGoalComponent } from './portfolio-goal.component';

describe('PortfolioGoalComponent', () => {
  let component: PortfolioGoalComponent;
  let fixture: ComponentFixture<PortfolioGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
