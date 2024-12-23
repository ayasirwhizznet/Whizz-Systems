import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpiComponent } from './npi.component';

describe('NpiComponent', () => {
  let component: NpiComponent;
  let fixture: ComponentFixture<NpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
