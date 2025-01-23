import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestingSolutionsComponent } from './lab-testing-solutions.component';

describe('LabTestingSolutionsComponent', () => {
  let component: LabTestingSolutionsComponent;
  let fixture: ComponentFixture<LabTestingSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabTestingSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabTestingSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
