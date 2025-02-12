import  KeenSlider  from 'keen-slider';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { NewsCardComponent } from '../news-card/news-card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CbuttonComponent } from '../cbutton/cbutton.component';

@Component({
  selector: 'app-cnews',
  standalone: true,
  imports: [NewsCardComponent, CommonModule, RouterLink, CbuttonComponent],
  templateUrl: './news.component.html',
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
    {
      imageUrl: '../../assets/news/img3.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img3.png',
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
  progress = {
    maxIdx:6,
    abs:0,
  };
  totalSlides = this.cards.length;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slideChanged: (slider) => {
        this.progress = slider.track.details;
        console.log(this.slider.track.details)
      },

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
          slides: {
            perView: 3,
            spacing: 50,
          },
        },
        "(min-width: 1700px)": {
          slides: {
            perView: 3,
            spacing: 70,
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
