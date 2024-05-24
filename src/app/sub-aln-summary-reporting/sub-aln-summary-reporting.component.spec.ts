import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnSummaryReportingComponent } from './sub-aln-summary-reporting.component';

describe('SubAlnSummaryReportingComponent', () => {
  let component: SubAlnSummaryReportingComponent;
  let fixture: ComponentFixture<SubAlnSummaryReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnSummaryReportingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnSummaryReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
