import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnConfirmGeneralComponent } from './sub-aln-confirm-general.component';

describe('SubAlnConfirmGeneralComponent', () => {
  let component: SubAlnConfirmGeneralComponent;
  let fixture: ComponentFixture<SubAlnConfirmGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnConfirmGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnConfirmGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
