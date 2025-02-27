import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pcle6Component } from './pcle-6.component';

describe('Pcle6Component', () => {
  let component: Pcle6Component;
  let fixture: ComponentFixture<Pcle6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pcle6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pcle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
