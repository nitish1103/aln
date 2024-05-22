import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubAlnProgramComponent } from './create-sub-aln-program.component';

describe('CreateSubAlnProgramComponent', () => {
  let component: CreateSubAlnProgramComponent;
  let fixture: ComponentFixture<CreateSubAlnProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSubAlnProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSubAlnProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
