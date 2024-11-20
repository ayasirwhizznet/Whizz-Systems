import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cbutton3Component } from './cbutton3.component';

describe('Cbutton3Component', () => {
  let component: Cbutton3Component;
  let fixture: ComponentFixture<Cbutton3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cbutton3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cbutton3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
