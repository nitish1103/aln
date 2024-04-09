import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlnComponent } from './list-aln.component';

describe('ListAlnComponent', () => {
  let component: ListAlnComponent;
  let fixture: ComponentFixture<ListAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
