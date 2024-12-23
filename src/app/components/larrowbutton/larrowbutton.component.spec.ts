import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarrowbuttonComponent } from './larrowbutton.component';

describe('LarrowbuttonComponent', () => {
  let component: LarrowbuttonComponent;
  let fixture: ComponentFixture<LarrowbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LarrowbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LarrowbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
