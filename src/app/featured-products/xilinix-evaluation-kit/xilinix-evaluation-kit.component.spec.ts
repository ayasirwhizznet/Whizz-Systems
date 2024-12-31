import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XilinixEvaluationKitComponent } from './xilinix-evaluation-kit.component';

describe('XilinixEvaluationKitComponent', () => {
  let component: XilinixEvaluationKitComponent;
  let fixture: ComponentFixture<XilinixEvaluationKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XilinixEvaluationKitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XilinixEvaluationKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
