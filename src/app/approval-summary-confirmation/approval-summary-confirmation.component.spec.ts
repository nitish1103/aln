import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalSummaryConfirmationComponent } from './approval-summary-confirmation.component';

describe('ApprovalSummaryConfirmationComponent', () => {
  let component: ApprovalSummaryConfirmationComponent;
  let fixture: ComponentFixture<ApprovalSummaryConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalSummaryConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovalSummaryConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
