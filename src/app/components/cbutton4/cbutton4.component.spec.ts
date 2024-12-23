import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cbutton4Component } from './cbutton4.component';

describe('Cbutton4Component', () => {
  let component: Cbutton4Component;
  let fixture: ComponentFixture<Cbutton4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cbutton4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cbutton4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
