import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAlnComponent } from './approve-aln.component';

describe('ApproveAlnComponent', () => {
  let component: ApproveAlnComponent;
  let fixture: ComponentFixture<ApproveAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
