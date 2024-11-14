import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RArrowButtonComponent } from './r-arrow-button.component';

describe('RArrowButtonComponent', () => {
  let component: RArrowButtonComponent;
  let fixture: ComponentFixture<RArrowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RArrowButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RArrowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
