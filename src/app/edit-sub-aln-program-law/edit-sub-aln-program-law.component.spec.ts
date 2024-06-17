import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubAlnProgramLawComponent } from './edit-sub-aln-program-law.component';

describe('EditSubAlnProgramLawComponent', () => {
  let component: EditSubAlnProgramLawComponent;
  let fixture: ComponentFixture<EditSubAlnProgramLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSubAlnProgramLawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSubAlnProgramLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
