import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

interface Slide {
  title: string;
  subtitle: string;
  content: string;
  categories?: string[];
  imgUrl: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Run auto-slide only in browser
    if (isPlatformBrowser(this.platformId)) {
      this.autoSlide();
    }
  }

  ngOnDestroy() {
    // Clear interval when component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    const next = (this.currentSlide() + 1) % 3;
    this.currentSlide.set(next);
  }

  prevSlide() {
    const prev = (this.currentSlide() - 1 + 3) % 3;
    this.currentSlide.set(prev);
  }

  autoSlide() {
    this.intervalId = setInterval(() => {
      const next = (this.currentSlide() + 1) % 3;
      this.currentSlide.set(next);
    }, 6000);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
