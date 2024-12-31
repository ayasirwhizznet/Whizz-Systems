import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OruComponent } from './oru.component';

describe('OruComponent', () => {
  let component: OruComponent;
  let fixture: ComponentFixture<OruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
