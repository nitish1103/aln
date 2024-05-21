import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlnDetailComponent } from './aln-detail.component';

describe('AlnDetailComponent', () => {
  let component: AlnDetailComponent;
  let fixture: ComponentFixture<AlnDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlnDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
