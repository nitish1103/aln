import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramOfficeAlnComponent } from './program-office-aln.component';

describe('ProgramOfficeAlnComponent', () => {
  let component: ProgramOfficeAlnComponent;
  let fixture: ComponentFixture<ProgramOfficeAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramOfficeAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramOfficeAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
