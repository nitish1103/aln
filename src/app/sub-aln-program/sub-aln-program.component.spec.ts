import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnProgramComponent } from './sub-aln-program.component';

describe('SubAlnProgramComponent', () => {
  let component: SubAlnProgramComponent;
  let fixture: ComponentFixture<SubAlnProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
