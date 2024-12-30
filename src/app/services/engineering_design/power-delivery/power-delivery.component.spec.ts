import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerDeliveryComponent } from './power-delivery.component';

describe('PowerDeliveryComponent', () => {
  let component: PowerDeliveryComponent;
  let fixture: ComponentFixture<PowerDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerDeliveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
