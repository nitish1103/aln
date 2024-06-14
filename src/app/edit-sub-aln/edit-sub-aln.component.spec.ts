import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubAlnComponent } from './edit-sub-aln.component';

describe('EditSubAlnComponent', () => {
  let component: EditSubAlnComponent;
  let fixture: ComponentFixture<EditSubAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSubAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSubAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
