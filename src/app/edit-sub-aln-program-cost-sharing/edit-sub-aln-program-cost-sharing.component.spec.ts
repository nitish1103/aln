import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubAlnProgramCostSharingComponent } from './edit-sub-aln-program-cost-sharing.component';

describe('EditSubAlnProgramCostSharingComponent', () => {
  let component: EditSubAlnProgramCostSharingComponent;
  let fixture: ComponentFixture<EditSubAlnProgramCostSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSubAlnProgramCostSharingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSubAlnProgramCostSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
