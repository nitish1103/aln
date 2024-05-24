import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnSummaryProgramOfficeComponent } from './sub-aln-summary-program-office.component';

describe('SubAlnSummaryProgramOfficeComponent', () => {
  let component: SubAlnSummaryProgramOfficeComponent;
  let fixture: ComponentFixture<SubAlnSummaryProgramOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnSummaryProgramOfficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnSummaryProgramOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
