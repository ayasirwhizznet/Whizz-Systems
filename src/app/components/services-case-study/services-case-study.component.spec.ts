import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCaseStudyComponent } from './services-case-study.component';

describe('ServicesCaseStudyComponent', () => {
  let component: ServicesCaseStudyComponent;
  let fixture: ComponentFixture<ServicesCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCaseStudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
