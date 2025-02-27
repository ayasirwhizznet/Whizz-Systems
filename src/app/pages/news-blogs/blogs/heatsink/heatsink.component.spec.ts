import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatsinkComponent } from './heatsink.component';

describe('HeatsinkComponent', () => {
  let component: HeatsinkComponent;
  let fixture: ComponentFixture<HeatsinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatsinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatsinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
