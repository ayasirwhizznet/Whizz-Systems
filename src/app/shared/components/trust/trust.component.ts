import KeenSlider from 'keen-slider';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

const animation = { duration: 7000, easing: (t: number) => t };

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.scss'],
})
export class TrustComponent implements AfterViewInit {
  partners:any[] = [
    'assets/home/trust/altera.png',
    'assets/home/trust/amd.png',
    'assets/home/trust/nvidia.png',
    'assets/home/trust/amazon.png',
    'assets/home/trust/microsoft.png',
    'assets/home/trust/keysight.png',
    'assets/home/trust/google.png',
    'assets/home/trust/advantest.png',
    'assets/home/trust/paypal.png',
    'assets/home/trust/broadcom.png',
  ];

  @ViewChild('sliderRef', { static: false }) sliderRef!: ElementRef;

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
