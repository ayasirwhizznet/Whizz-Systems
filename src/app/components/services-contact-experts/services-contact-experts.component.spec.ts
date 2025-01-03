import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesContactExpertsComponent } from './services-contact-experts.component';

describe('ServicesContactExpertsComponent', () => {
  let component: ServicesContactExpertsComponent;
  let fixture: ComponentFixture<ServicesContactExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesContactExpertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesContactExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
