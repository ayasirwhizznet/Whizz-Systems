import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { NewsbuttonComponent } from '../newsbutton/newsbutton.component';
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
      imgUrl: '../../../../assets/blogs/blogimg.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imgUrl: '../../../../assets/blogs/blogimg.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imgUrl: '../../../../assets/blogs/blogimg.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
  ];

}
