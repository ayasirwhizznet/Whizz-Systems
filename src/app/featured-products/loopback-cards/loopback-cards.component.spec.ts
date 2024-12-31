import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopbackCardsComponent } from './loopback-cards.component';

describe('LoopbackCardsComponent', () => {
  let component: LoopbackCardsComponent;
  let fixture: ComponentFixture<LoopbackCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopbackCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopbackCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
