import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAlnGeneralComponent } from './sub-aln-general.component';

describe('SubAlnGeneralComponent', () => {
  let component: SubAlnGeneralComponent;
  let fixture: ComponentFixture<SubAlnGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubAlnGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubAlnGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
