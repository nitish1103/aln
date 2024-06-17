import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubAlnProgramAccountingComponent } from './edit-sub-aln-program-accounting.component';

describe('EditSubAlnProgramAccountingComponent', () => {
  let component: EditSubAlnProgramAccountingComponent;
  let fixture: ComponentFixture<EditSubAlnProgramAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSubAlnProgramAccountingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSubAlnProgramAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
