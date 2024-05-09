import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlnComponent } from './delete-aln.component';

describe('DeleteAlnComponent', () => {
  let component: DeleteAlnComponent;
  let fixture: ComponentFixture<DeleteAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
