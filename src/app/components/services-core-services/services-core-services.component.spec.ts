import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCoreServicesComponent } from './services-core-services.component';

describe('ServicesCoreServicesComponent', () => {
  let component: ServicesCoreServicesComponent;
  let fixture: ComponentFixture<ServicesCoreServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCoreServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCoreServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
