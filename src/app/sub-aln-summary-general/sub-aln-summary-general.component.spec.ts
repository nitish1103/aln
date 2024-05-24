import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnSummaryGeneralComponent } from './sub-aln-summary-general.component';

describe('SubAlnSummaryGeneralComponent', () => {
  let component: SubAlnSummaryGeneralComponent;
  let fixture: ComponentFixture<SubAlnSummaryGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnSummaryGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnSummaryGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
