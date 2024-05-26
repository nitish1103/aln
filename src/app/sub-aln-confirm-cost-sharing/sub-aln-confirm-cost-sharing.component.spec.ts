import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnConfirmCostSharingComponent } from './sub-aln-confirm-cost-sharing.component';

describe('SubAlnConfirmCostSharingComponent', () => {
  let component: SubAlnConfirmCostSharingComponent;
  let fixture: ComponentFixture<SubAlnConfirmCostSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnConfirmCostSharingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnConfirmCostSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
