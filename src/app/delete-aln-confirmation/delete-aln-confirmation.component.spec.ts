import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlnConfirmationComponent } from './delete-aln-confirmation.component';

describe('DeleteAlnConfirmationComponent', () => {
  let component: DeleteAlnConfirmationComponent;
  let fixture: ComponentFixture<DeleteAlnConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAlnConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAlnConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
