import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnConfirmReportingComponent } from './sub-aln-confirm-reporting.component';

describe('SubAlnConfirmReportingComponent', () => {
  let component: SubAlnConfirmReportingComponent;
  let fixture: ComponentFixture<SubAlnConfirmReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnConfirmReportingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnConfirmReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
