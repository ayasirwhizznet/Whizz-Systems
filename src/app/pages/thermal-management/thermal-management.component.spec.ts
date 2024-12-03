import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalManagementComponent } from './thermal-management.component';

describe('ThermalManagementComponent', () => {
  let component: ThermalManagementComponent;
  let fixture: ComponentFixture<ThermalManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThermalManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
