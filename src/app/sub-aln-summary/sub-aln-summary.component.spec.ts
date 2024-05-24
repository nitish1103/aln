import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnSummaryComponent } from './sub-aln-summary.component';

describe('SubAlnSummaryComponent', () => {
  let component: SubAlnSummaryComponent;
  let fixture: ComponentFixture<SubAlnSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
