import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnComponent } from './sub-aln.component';

describe('SubAlnComponent', () => {
  let component: SubAlnComponent;
  let fixture: ComponentFixture<SubAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
