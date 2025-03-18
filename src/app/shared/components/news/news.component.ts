import { isPlatformBrowser, CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { NewsCardComponent } from '@components/news-card/news-card.component';

import KeenSlider from 'keen-slider';

@Component({
  selector: 'app-cnews',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, NewsCardComponent],
  templateUrl: './news.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsComponent implements AfterViewInit, OnDestroy {
  blogs: any[] = [
    {
      imgUrl: 'assets/news/blog-1.png',
      date: 'May 29, 2024',
      tags: ['Whitepaper', 'High Speed Connectivity'],
      title: 'PCIe-6: Everything You Need to Know',
      link: '/news-&-insights/whitepaper-pcle6',
    },
    {
      imgUrl: 'assets/news/blog-2.png',
      date: 'July 9, 2024',
      tags: ['Case Study', 'Hardware Design'],
      title:
        'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
      link: '/news-&-insights/whitepaper-5g-oru',
    },
    {
      imgUrl: 'assets/news/blog-3.png',
      date: 'July 9, 2024',
      tags: ['Whitepaper', 'Thermal Management'],
      title:
        'Heatsinks Uncovered: Best Practices for Optimized Thermal Management',
      link: '/news-&-insights/whitepaper-heatsink',
    },
    {
      imgUrl: 'assets/news/blog-4.png',
      date: 'December 12, 2024',
      tags: ['Case Study', 'Medical Devices'],
      title: 'Engineering Smart Medical Devices: The Invensify Case Study',
      link: '/news-&-insights/whitepaper-invensify',
    },
  ];

  @ViewChild('sliderRef', { static: false }) sliderRef!: ElementRef;
  slider: any = null;
  progress = { maxIdx: 6, abs: 0 };
  totalSlides = this.blogs.length;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        slideChanged: (slider) => {
          this.progress = slider.track.details;
        },
        breakpoints: {
          '(min-width: 0px)': { slides: { perView: 1, spacing: 50 } },
          '(min-width: 640px)': { slides: { perView: 2, spacing: 50 } },
          '(min-width: 1280px)': { slides: { perView: 3, spacing: 50 } },
          '(min-width: 1536px)': { slides: { perView: 3, spacing: 50 } },
          '(min-width: 1800px)': { slides: { perView: 3, spacing: 64 } },
        },
      });
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.slider) {
      this.slider.destroy();
    }
  }

  nextSlide() {
    if (this.slider) this.slider.next();
  }

  prevSlide() {
    if (this.slider) this.slider.prev();
  }
}
