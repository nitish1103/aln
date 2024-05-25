import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnSummaryCostSharingComponent } from './sub-aln-summary-cost-sharing.component';

describe('SubAlnSummaryCostSharingComponent', () => {
  let component: SubAlnSummaryCostSharingComponent;
  let fixture: ComponentFixture<SubAlnSummaryCostSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnSummaryCostSharingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnSummaryCostSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
