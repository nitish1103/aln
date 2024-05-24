import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsharingSubAlnComponent } from './costsharing-sub-aln.component';

describe('CostsharingSubAlnComponent', () => {
  let component: CostsharingSubAlnComponent;
  let fixture: ComponentFixture<CostsharingSubAlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostsharingSubAlnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostsharingSubAlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
