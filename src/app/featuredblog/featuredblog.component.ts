import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsbuttonComponent } from "../newsbutton/newsbutton.component";
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';

@Component({
  selector: 'app-featuredblog',
  standalone: true,
  imports: [RouterLink, NewsbuttonComponent, NgFor, NgClass,NewsCardComponent, NgStyle],
  templateUrl: './featuredblog.component.html',
  styleUrl: './featuredblog.component.scss'
})
export class FeaturedblogComponent {
  @Input() date: string | null = null;
  @Input() blogTitle: string | null = null;

  blogData:any[] = [
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
