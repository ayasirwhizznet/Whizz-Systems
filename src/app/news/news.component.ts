import  KeenSlider  from 'keen-slider';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { NewsCardComponent } from '../news-card/news-card.component';
import { NgFor } from '@angular/common';
import { CbuttonComponent } from '../cbutton/cbutton.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsCardComponent, NgFor, CbuttonComponent, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent {
  cards:any[] = [
    {
      imageUrl: '../../assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img2.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img3.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
  ];

  @ViewChild("sliderRef") sliderRef = {} as ElementRef;

  slider: any = null;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {

      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 1,
            spacing: 50,
          },
        },
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 50,
          },
        },
        "(min-width: 1200px)": {
          loop: true,
          slides: {
            perView: 3,
            spacing: 50,
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
