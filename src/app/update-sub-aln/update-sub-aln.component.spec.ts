import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubAlnComponent } from './update-sub-aln.component';

describe('UpdateSubAlnComponent', () => {
  let component: UpdateSubAlnComponent;
  let fixture: ComponentFixture<UpdateSubAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSubAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSubAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
