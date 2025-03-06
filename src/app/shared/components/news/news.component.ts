import KeenSlider from 'keen-slider';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { NewsCardComponent } from '@components/news-card/news-card.component';

@Component({
  selector: 'app-cnews',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, NewsCardComponent],
  templateUrl: './news.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsComponent {
  blogs: any[] = [
    {
      imgUrl: 'assets/news/blog-1.png',
      date: 'May 29, 2024',
      tags: ['Whitepaper','High Speed Connectivity'],
      title: 'PCIe-6: Everything You Need to Know',
      link: '/news-&-insights/whitepaper-pcle6'
    },
    {
      imgUrl: 'assets/news/blog-2.png',
      date: 'July 9, 2024',
      tags: ['Case Study','Hardware Design'],
      title: 'Building the Future of 5G Connectivity with Open Radio Unit Solutions',
      link: '/news-&-insights/whitepaper-5g-oru'
    },
    {
      imgUrl: 'assets/news/blog-3.png',
      date: 'July 9, 2024',
      tags: ['Whitepaper','Thermal Management'],
      title: 'Heatsinks Uncovered: Best Practices for Optimized Thermal Management',
      link: '/news-&-insights/whitepaper-heatsink'
    },
    {
      imgUrl: 'assets/news/blog.png',
      date: 'July 9, 2024',
      tags: ['Heatsink','Thermal Management'],
      title: 'Interesting Blog Title that Can Fit On Two Lines',
      link: '/news-&-insights/whitepaper-invensify'
    }
  ];

  @ViewChild('sliderRef') sliderRef = {} as ElementRef;

  slider: any = null;
  progress = {
    maxIdx: 6,
    abs: 0,
  };
  totalSlides = this.blogs.length;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slideChanged: (slider) => {
        this.progress = slider.track.details;
        console.log(this.slider.track.details);
      },

      breakpoints: {
        '(min-width: 0px)': {
          slides: {
            perView: 1,
            spacing: 50,
          },
        },
        '(min-width: 640px)': {
          slides: {
            perView: 2,
            spacing: 50,
          },
        },
        '(min-width: 1280px)': {
          slides: {
            perView: 3,
            spacing: 50,
          },
        },
        '(min-width: 1536px)': {
          slides: {
            perView: 3,
            spacing: 50,
          },
        },
        '(min-width: 1800px)': {
          slides: {
            perView: 3,
            spacing: 64,
          },
        },
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
  nextSlide() {
    this.slider.next();
  }
  prevSlide() {
    this.slider.prev();
  }
}
