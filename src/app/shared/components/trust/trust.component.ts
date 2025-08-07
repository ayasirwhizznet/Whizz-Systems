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
  if (!isPlatformBrowser(this.platformId)) return;

  const KeenSlider = (await import('keen-slider')).default;

  const autoplay = (step: number, duration: number) => {
    const animation = { duration, easing: (t: number) => t };
    return {
      created(s: any) {
        s.moveToIdx(step, true, animation);
      },
      updated(s: any) {
        s.moveToIdx(s.track.details.abs + step, true, animation);
      },
      animationEnded(s: any) {
        s.moveToIdx(s.track.details.abs + step, true, animation);
      },
    };
  };

  this.slider = new KeenSlider(this.sliderRef.nativeElement, {
    loop: true,
    renderMode: 'precision',
    drag: false,
    breakpoints: {
      '(min-width: 0px)': {
        slides: { perView: 2, spacing: 30 },
        ...autoplay(15, 25000), 
      },
      '(min-width: 768px)': {
        slides: { perView: 3, spacing: 30 },
        ...autoplay(5, 8000),
      },
      '(min-width: 1200px)': {
        slides: { perView: 4.5, spacing: 50 },
        ...autoplay(5, 7000),
      },
    },
  });
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
