import { Component } from '@angular/core';
import { FeaturedblogComponent } from "../../featuredblog/featuredblog.component";
import { NewsCardComponent } from "../../news-card/news-card.component";
import { NgFor, NgIf } from '@angular/common';
import { CbuttonComponent } from '../../cbutton/cbutton.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FeaturedblogComponent, NewsCardComponent, NgFor, CbuttonComponent, NgIf],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  isBlogVisible:boolean = false;

  loadBlogs():void {
    this.isBlogVisible = !this.isBlogVisible;
  }

  cards:any[] = [
    {
      imageUrl: '../../assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: '../../assets/news/img1.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
  ];
}
