import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsCardComponent } from '@components/news-card/news-card.component';

@Component({
  selector: 'app-pcle-6',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, AnimatedButton, BlogTagComponent, NewsCardComponent],
  templateUrl: './pcle-6.component.html'
})
export class Pcle6Component {
  links = [
    { img: 'assets/news/whizzicon.svg', imgUrl: '' },
    { img: 'assets/news/whizz.svg', imgUrl: '' },
    { img: 'assets/news/linkedin.svg', imgUrl: '' },
    { img: 'assets/news/youtube.svg', imgUrl: '' },
  ];

  tags = ['tag a','tag a','tag a'];


  cards: any[] = [
    {
      imageUrl: 'assets/news/blogs/pcle6/blog1.png',
      date: 'Month, DD, YYYY',
      tags: ['Case Study', 'Hardware Design', 'Telecom Engineering'],
      title: 'Building the Future of 5G Connectivity with Open Radio...',
    },
    {
      imageUrl: 'assets/news/blogs/pcle6/blog2.png',
      date: 'Month, DD, YYYY',
      tags: ['Heatsink', 'Thermal Management'],
      title: 'Heatsinks: Considerations, guidance, and best practices.',
    },
    {
      imageUrl: 'assets/news/blogs/pcle6/blog3.png',
      date: 'Month, DD, YYYY',
      tags: ['Heatsink', 'Thermal Management'],
      title: 'Lorem Ipsum',
    }
  ];
}
