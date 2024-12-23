import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbLayoutComponent } from './pcb-layout.component';

describe('PcbLayoutComponent', () => {
  let component: PcbLayoutComponent;
  let fixture: ComponentFixture<PcbLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcbLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcbLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
