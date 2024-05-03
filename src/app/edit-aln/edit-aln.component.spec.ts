import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlnComponent } from './edit-aln.component';

describe('EditAlnComponent', () => {
  let component: EditAlnComponent;
  let fixture: ComponentFixture<EditAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
