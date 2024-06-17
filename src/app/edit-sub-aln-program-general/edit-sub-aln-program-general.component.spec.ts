import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubAlnProgramGeneralComponent } from './edit-sub-aln-program-general.component';

describe('EditSubAlnProgramGeneralComponent', () => {
  let component: EditSubAlnProgramGeneralComponent;
  let fixture: ComponentFixture<EditSubAlnProgramGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSubAlnProgramGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSubAlnProgramGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
