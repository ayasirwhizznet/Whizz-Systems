import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsCardComponent } from '../news-card/news-card.component';
import { NgFor } from '@angular/common';
import { CbuttonComponent } from '../cbutton/cbutton.component';
import { TestimonialCardComponent } from "../testimonial-card/testimonial-card.component";

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
}
