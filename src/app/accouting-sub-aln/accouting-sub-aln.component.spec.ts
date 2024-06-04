import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutingSubAlnComponent } from './accouting-sub-aln.component';

describe('AccoutingSubAlnComponent', () => {
  let component: AccoutingSubAlnComponent;
  let fixture: ComponentFixture<AccoutingSubAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccoutingSubAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccoutingSubAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
