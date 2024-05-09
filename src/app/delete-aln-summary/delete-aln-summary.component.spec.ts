import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlnSummaryComponent } from './delete-aln-summary.component';

describe('DeleteAlnSummaryComponent', () => {
  let component: DeleteAlnSummaryComponent;
  let fixture: ComponentFixture<DeleteAlnSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAlnSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAlnSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
