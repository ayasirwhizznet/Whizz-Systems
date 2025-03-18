import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cservices',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './services.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesComponent implements AfterViewInit {
  serviceCategories: any[] = [
    {
      imgUrl: 'assets/home/services/engg.&design.png',
      name: 'Engineering & Design',
      desc: 'Innovating Designs for the Next Generation of Electronics.',
      link: '/services',
    },
    {
      imgUrl: 'assets/home/services/npi.png',
      name: 'NPI',
      desc: 'Accelerating your product launch with rapid prototyping and efficient NPI processes.',
      link: '/services/npi',
    },
    {
      imgUrl: 'assets/home/services/advanced-manufacturing.png',
      name: 'Advanced Manufacturing',
      desc: 'World-class manufacturing to meet complex demands, ensuring quality and efficiency.',
      link: '/services/advanced-manufacturing',
    },
    {
      imgUrl: 'assets/home/services/lab-testing.png',
      name: 'Lab Testing Solutions',
      desc: 'Ensuring product reliability and compliance through comprehensive validation.',
      link: '/services/lab-testing-solutions',
    },
    {
      imgUrl: 'assets/home/services/supply-chain.png',
      name: 'Supply Chain Management & Design',
      desc: 'Streamlining your supply chain with integrated sourcing, compliance, and procurement solutions, so you can rely on a single, trusted partner.',
      link: '/services/supply-chain-management',
    },
    {
      imgUrl: 'assets/home/services/sustainable.png',
      name: 'Sustaining Engineering & Obsolescence Management',
      desc: 'Keeping your product lines future-proof with proactive support and obsolescence solutions.',
      link: '/services/sustainable_engineering',
    },
  ];

  @ViewChild('sliderRef', { static: false }) sliderRef!: ElementRef;
  slider: any = null;
  progress = { maxIdx: 5, abs: 0 };
  totalSlides = this.serviceCategories.length;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const KeenSlider = (await import('keen-slider')).default;

      setTimeout(() => {
        if (this.sliderRef?.nativeElement) {
          this.slider = new KeenSlider(this.sliderRef.nativeElement, {
            slideChanged: (slider) => {
              this.progress = slider.track.details;
            },
            breakpoints: {
              '(min-width: 0px)': { slides: { perView: 1, spacing: 50 } },
              '(min-width: 640px)': { slides: { perView: 2, spacing: 60 } },
              '(min-width: 1280px)': { slides: { perView: 4, spacing: 40 } },
              '(min-width: 1536px)': { slides: { perView: 4, spacing: 52 } },
              '(min-width: 1800px)': { slides: { perView: 4, spacing: 64 } },
            },
          });
        }
      }, 500);
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

  nextSlide() {
    this.slider.next();
  }

  prevSlide() {
    this.slider.prev();
  }
}
