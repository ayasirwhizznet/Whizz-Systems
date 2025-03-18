import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.scss'],
})
export class TrustComponent implements AfterViewInit {
  partners: { link: string; alt: string }[] = [
    { link: 'assets/home/trust/altera.png', alt: 'altera' },
    { link: 'assets/home/trust/amd.png', alt: 'amd' },
    { link: 'assets/home/trust/nvidia.png', alt: 'nvidia' },
    { link: 'assets/home/trust/amazon.png', alt: 'amazon' },
    { link: 'assets/home/trust/microsoft.png', alt: 'microsoft' },
    { link: 'assets/home/trust/keysight.png', alt: 'keysight' },
    { link: 'assets/home/trust/google.png', alt: 'google' },
    { link: 'assets/home/trust/advantest.png', alt: 'advantest' },
    { link: 'assets/home/trust/paypal.png', alt: 'paypal' },
    { link: 'assets/home/trust/broadcom.png', alt: 'broadcom' },
  ];
  

  @ViewChild('sliderRef', { static: false }) sliderRef!: ElementRef;
  slider: any = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  async ngAfterViewInit() {
    // Ensure Keen Slider runs only in the browser
    if (isPlatformBrowser(this.platformId)) {
      const KeenSlider = (await import('keen-slider')).default;
      const animation = { duration: 7000, easing: (t: number) => t };

      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        breakpoints: {
          '(min-width: 0px)': {
            loop: true,
            renderMode: 'precision',
            drag: false,
            slides: { perView: 2, spacing: 30 },
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
            slides: { perView: 3, spacing: 30 },
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
            slides: { perView: 4.5, spacing: 50 },
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
  }

  ngOnDestroy() {
    if (
      isPlatformBrowser(this.platformId) &&
      this.slider &&
      typeof this.slider.destroy === 'function'
    ) {
      this.slider.destroy();
    }
  }
}
