import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpgaComponent } from './fpga.component';

describe('FpgaComponent', () => {
  let component: FpgaComponent;
  let fixture: ComponentFixture<FpgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FpgaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FpgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
