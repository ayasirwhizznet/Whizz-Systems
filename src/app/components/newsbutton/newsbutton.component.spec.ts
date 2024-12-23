import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsbuttonComponent } from './newsbutton.component';

describe('NewsbuttonComponent', () => {
  let component: NewsbuttonComponent;
  let fixture: ComponentFixture<NewsbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
