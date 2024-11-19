import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedblogComponent } from './featuredblog.component';

describe('FeaturedblogComponent', () => {
  let component: FeaturedblogComponent;
  let fixture: ComponentFixture<FeaturedblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
