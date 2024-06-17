import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubAlnProgramReportingComponent } from './edit-sub-aln-program-reporting.component';

describe('EditSubAlnProgramReportingComponent', () => {
  let component: EditSubAlnProgramReportingComponent;
  let fixture: ComponentFixture<EditSubAlnProgramReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSubAlnProgramReportingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSubAlnProgramReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
