import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlnSummaryComponent } from './aln-summary.component';

describe('AlnSummaryComponent', () => {
  let component: AlnSummaryComponent;
  let fixture: ComponentFixture<AlnSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlnSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlnSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
