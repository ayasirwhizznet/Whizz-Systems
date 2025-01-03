import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIndustryComponent } from './services-industry.component';

describe('ServicesIndustryComponent', () => {
  let component: ServicesIndustryComponent;
  let fixture: ComponentFixture<ServicesIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesIndustryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
