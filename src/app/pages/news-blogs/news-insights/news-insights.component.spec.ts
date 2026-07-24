import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsInsightsComponent } from './news-insights.component';

describe('NewsInsightsComponent', () => {
  let component: NewsInsightsComponent;
  let fixture: ComponentFixture<NewsInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsInsightsComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
