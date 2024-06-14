import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubAlnProgramComponent } from './edit-sub-aln-program.component';

describe('EditSubAlnProgramComponent', () => {
  let component: EditSubAlnProgramComponent;
  let fixture: ComponentFixture<EditSubAlnProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSubAlnProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSubAlnProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
