import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnConfirmComponent } from './sub-aln-confirm.component';

describe('SubAlnConfirmComponent', () => {
  let component: SubAlnConfirmComponent;
  let fixture: ComponentFixture<SubAlnConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
