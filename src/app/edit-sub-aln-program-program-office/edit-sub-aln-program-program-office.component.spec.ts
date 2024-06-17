import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubAlnProgramProgramOfficeComponent } from './edit-sub-aln-program-program-office.component';

describe('EditSubAlnProgramProgramOfficeComponent', () => {
  let component: EditSubAlnProgramProgramOfficeComponent;
  let fixture: ComponentFixture<EditSubAlnProgramProgramOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSubAlnProgramProgramOfficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSubAlnProgramProgramOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
