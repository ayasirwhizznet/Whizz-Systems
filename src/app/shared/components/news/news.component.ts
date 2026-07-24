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
  Input,
  booleanAttribute,
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
  styleUrl: './news.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsComponent implements AfterViewInit, OnDestroy {
  @Input() blogs: any[] = [];
  @Input() title: string = 'Latest News & Insights';
  @Input() subtitle: string = '';
  @Input() viewAllLabel: string = 'See more';
  @Input() viewAllLink: string = '/news-&-insights';
  @Input() buttonSize: 'small' | 'medium' | 'large' = 'medium';
  /** 'default' = title left + actions right; 'centered' = arrows flanking centered title; 'none' = no header */
  @Input() headerLayout: 'default' | 'centered' | 'none' = 'default';
  @Input() showViewAll: boolean = true;
  /** Desktop (xl+) cards visible at once */
  @Input() desktopPerView: number = 3;
  /** Passed through to each `app-news-card` (e.g. `'16px'`) */
  @Input() contentInset: string = '';
  /** Passed through to each `app-news-card`; defaults to the card's two-line clamp. */
  @Input() lineClamp: number = 2;
  /** When true, horizontal padding is 6.3% from sm+ (news-insights page). */
  @Input({ transform: booleanAttribute }) fromNews: boolean = false;
  /** Home page: init only when section is near viewport (avoids packed slides on refresh). */
  @Input({ transform: booleanAttribute }) deferUntilVisible: boolean = false;

  @ViewChild('sliderRef', { static: false }) sliderRef!: ElementRef;
  slider: any = null;
  sliderReady = false;
  progress = { maxIdx: 6, abs: 0 };
  totalSlides = this.blogs.length;

  private initTimer: ReturnType<typeof setTimeout> | null = null;
  private updateTimer: ReturnType<typeof setTimeout> | null = null;
  private visibilityObserver: IntersectionObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId) || !this.sliderRef?.nativeElement) {
      return;
    }

    if (this.deferUntilVisible) {
      this.visibilityObserver = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          this.visibilityObserver?.disconnect();
          this.visibilityObserver = null;
          this.scheduleInit();
        },
        { root: null, rootMargin: '300px 0px', threshold: 0 },
      );
      this.visibilityObserver.observe(this.sliderRef.nativeElement);
      return;
    }

    this.scheduleInit();
  }

  private scheduleInit() {
    this.initTimer = setTimeout(() => {
      this.initSlider();
      this.updateTimer = setTimeout(() => this.slider?.update(), 100);
    }, 0);
  }

  private initSlider() {
    if (!this.sliderRef?.nativeElement || this.slider) return;

    const desktopSpacing = this.desktopPerView >= 4 ? 32 : 50;
    const largeSpacing = this.desktopPerView >= 4 ? 40 : 64;

    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slides: { perView: 1, spacing: 50 },
      breakpoints: {
        '(min-width: 640px)': { slides: { perView: 2, spacing: 50 } },
        '(min-width: 1024px)': {
          slides: {
            perView: Math.min(3, this.desktopPerView),
            spacing: desktopSpacing,
          },
        },
        '(min-width: 1280px)': {
          slides: { perView: this.desktopPerView, spacing: desktopSpacing },
        },
        '(min-width: 1536px)': {
          slides: { perView: this.desktopPerView, spacing: desktopSpacing },
        },
        '(min-width: 1800px)': {
          slides: { perView: this.desktopPerView, spacing: largeSpacing },
        },
      },
      slideChanged: (slider) => {
        this.progress = slider.track.details;
      },
    });

    this.progress = this.slider.track.details;
    this.slider.update();
    this.sliderReady = true;
  }

  ngOnDestroy() {
    if (this.initTimer) clearTimeout(this.initTimer);
    if (this.updateTimer) clearTimeout(this.updateTimer);
    this.visibilityObserver?.disconnect();

    if (isPlatformBrowser(this.platformId) && this.slider) {
      this.slider.destroy();
      this.slider = null;
    }
  }

  nextSlide() {
    if (this.slider) this.slider.next();
  }

  prevSlide() {
    if (this.slider) this.slider.prev();
  }
}
