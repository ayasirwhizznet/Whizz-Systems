import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from '@components/news/news.component';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { NewsCardComponent } from "../../../shared/components/news-card/news-card.component";

@Component({
  selector: 'app-newspage',
  standalone: true,
  imports: [
    CommonModule,
    AnimatedButton,
    NewsComponent,
    BlogTagComponent,
    ButtonComponent,
    NewsCardComponent
],
  templateUrl: './newspage.component.html',
})
export class NewspageComponent {
  sectionVisibility: any = {
    signalIntegrity: true,
    power: true,
  };

  toggleVisibility(section: string) {
    this.sectionVisibility[section] = !this.sectionVisibility[section];
  }

  links = [
    { img: 'assets/news/whizzicon.svg', imgUrl: '' },
    { img: 'assets/news/whizz.svg', imgUrl: '' },
    { img: 'assets/news/linkedin.svg', imgUrl: '' },
    { img: 'assets/news/youtube.svg', imgUrl: '' },
  ];

  articlesummary = [
    { title: 'Summary Point Number One' },
    { title: 'Summary Point Number Two' },
    { title: 'Summary Point Number Three' },
    { title: 'Summary Point Number Four' },
    { title: 'Summary Point Number Five' },
    { title: 'Summary Point Number Six' },
  ];

  cards: any[] = [
    {
      imageUrl: 'assets/news/blog.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/blog.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    },
    {
      imageUrl: 'assets/news/blog.png',
      date: 'July 9, 2024',
      title: 'Interesting Blog Title that Can Fit On Two Lines',
    }
  ];
}
