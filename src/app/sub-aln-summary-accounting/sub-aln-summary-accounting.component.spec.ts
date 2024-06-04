import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnSummaryAccountingComponent } from './sub-aln-summary-accounting.component';

describe('SubAlnSummaryAccountingComponent', () => {
  let component: SubAlnSummaryAccountingComponent;
  let fixture: ComponentFixture<SubAlnSummaryAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnSummaryAccountingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnSummaryAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
