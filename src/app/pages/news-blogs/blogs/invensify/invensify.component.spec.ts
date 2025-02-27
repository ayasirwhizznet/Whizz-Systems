import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvensifyComponent } from './invensify.component';

describe('InvensifyComponent', () => {
  let component: InvensifyComponent;
  let fixture: ComponentFixture<InvensifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvensifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvensifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
