import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBenefits1Component } from './services-benefits1.component';

describe('ServicesBenefits1Component', () => {
  let component: ServicesBenefits1Component;
  let fixture: ComponentFixture<ServicesBenefits1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesBenefits1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesBenefits1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
