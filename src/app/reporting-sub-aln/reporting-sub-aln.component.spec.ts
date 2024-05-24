import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingSubAlnComponent } from './reporting-sub-aln.component';

describe('ReportingSubAlnComponent', () => {
  let component: ReportingSubAlnComponent;
  let fixture: ComponentFixture<ReportingSubAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportingSubAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportingSubAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
