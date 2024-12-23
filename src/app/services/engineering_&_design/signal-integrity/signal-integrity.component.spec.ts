import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalIntegrityComponent } from './signal-integrity.component';

describe('SignalIntegrityComponent', () => {
  let component: SignalIntegrityComponent;
  let fixture: ComponentFixture<SignalIntegrityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalIntegrityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalIntegrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
