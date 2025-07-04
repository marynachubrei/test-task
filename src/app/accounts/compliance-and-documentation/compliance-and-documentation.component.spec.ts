import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceAndDocumentationComponent } from './compliance-and-documentation.component';

describe('ComplianceAndDocumentationComponent', () => {
  let component: ComplianceAndDocumentationComponent;
  let fixture: ComponentFixture<ComplianceAndDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplianceAndDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceAndDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
