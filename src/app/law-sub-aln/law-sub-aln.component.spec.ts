import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawSubAlnComponent } from './law-sub-aln.component';

describe('LawSubAlnComponent', () => {
  let component: LawSubAlnComponent;
  let fixture: ComponentFixture<LawSubAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LawSubAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawSubAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
