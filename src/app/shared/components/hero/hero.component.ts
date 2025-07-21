import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
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
export class HeroComponent implements OnInit {
  currentSlide = signal(0);

  ngOnInit() {
    this.autoSlide();
  }

  intervalId: any;

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
