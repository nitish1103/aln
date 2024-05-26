import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnConfirmProgramOfficeComponent } from './sub-aln-confirm-program-office.component';

describe('SubAlnConfirmProgramOfficeComponent', () => {
  let component: SubAlnConfirmProgramOfficeComponent;
  let fixture: ComponentFixture<SubAlnConfirmProgramOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnConfirmProgramOfficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnConfirmProgramOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
