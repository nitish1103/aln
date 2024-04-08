import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlnComponent } from './create-aln.component';

describe('CreateAlnComponent', () => {
  let component: CreateAlnComponent;
  let fixture: ComponentFixture<CreateAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
