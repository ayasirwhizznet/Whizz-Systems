import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LArrowButtonComponent } from './l-arrow-button.component';

describe('LArrowButtonComponent', () => {
  let component: LArrowButtonComponent;
  let fixture: ComponentFixture<LArrowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LArrowButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LArrowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
