import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnListComponent } from './sub-aln-list.component';

describe('SubAlnListComponent', () => {
  let component: SubAlnListComponent;
  let fixture: ComponentFixture<SubAlnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
