import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubAlnComponent } from './create-sub-aln.component';

describe('CreateSubAlnComponent', () => {
  let component: CreateSubAlnComponent;
  let fixture: ComponentFixture<CreateSubAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSubAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSubAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
