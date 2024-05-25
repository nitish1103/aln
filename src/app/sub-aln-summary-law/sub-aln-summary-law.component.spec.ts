import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnSummaryLawComponent } from './sub-aln-summary-law.component';

describe('SubAlnSummaryLawComponent', () => {
  let component: SubAlnSummaryLawComponent;
  let fixture: ComponentFixture<SubAlnSummaryLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnSummaryLawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnSummaryLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
