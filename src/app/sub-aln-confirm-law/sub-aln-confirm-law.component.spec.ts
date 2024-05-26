import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnConfirmLawComponent } from './sub-aln-confirm-law.component';

describe('SubAlnConfirmLawComponent', () => {
  let component: SubAlnConfirmLawComponent;
  let fixture: ComponentFixture<SubAlnConfirmLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnConfirmLawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnConfirmLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
