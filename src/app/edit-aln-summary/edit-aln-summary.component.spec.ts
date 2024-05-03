import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlnSummaryComponent } from './edit-aln-summary.component';

describe('EditAlnSummaryComponent', () => {
  let component: EditAlnSummaryComponent;
  let fixture: ComponentFixture<EditAlnSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAlnSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAlnSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
