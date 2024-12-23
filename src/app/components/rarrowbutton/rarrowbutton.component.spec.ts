import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RarrowbuttonComponent } from './rarrowbutton.component';

describe('RarrowbuttonComponent', () => {
  let component: RarrowbuttonComponent;
  let fixture: ComponentFixture<RarrowbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RarrowbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RarrowbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
