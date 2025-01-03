import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBenefitsComponent } from './services-benefits.component';

describe('ServicesBenefitsComponent', () => {
  let component: ServicesBenefitsComponent;
  let fixture: ComponentFixture<ServicesBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
