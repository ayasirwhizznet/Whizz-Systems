import KeenSlider from 'keen-slider';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

const animation = { duration: 7000, easing: (t: number) => t };

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.scss'],
})
export class TrustComponent {
  companies = [
    '../../assets/trust/altera.png',
    '../../assets/trust/amd.png',
    '../../assets/trust/nvidia.png',
    '../../assets/trust/amazon.png',
    '../../assets/trust/microsoft.png',
    '../../assets/trust/keysight.png',
    '../../assets/trust/google.png',
    '../../assets/trust/advantest.png',
    '../../assets/trust/paypal.png',
    '../../assets/trust/broadcom.png',
  ];

  @ViewChild('sliderRef') sliderRef = {} as ElementRef;

  slider: any = null;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      breakpoints: {
        '(min-width: 0px)': {
          loop: true,
          renderMode: 'precision',
          drag: false,

          slides: {
            perView: 2,
            spacing: 30,
          },
          created(s) {
            s.moveToIdx(15, true, animation);
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 15, true, animation);
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 15, true, animation);
          },
        },
        '(min-width: 768px)': {
          loop: true,
          renderMode: 'precision',
          drag: false,

          slides: {
            perView: 3,
            spacing: 30,
          },
          created(s) {
            s.moveToIdx(5, true, animation);
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
          },
        },
        '(min-width: 1200px)': {
          loop: true,
          renderMode: 'precision',
          drag: false,

          slides: {
            perView: 4.5,
            spacing: 50,
          },
          created(s) {
            s.moveToIdx(5, true, animation);
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
          },
        },
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
