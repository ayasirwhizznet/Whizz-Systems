import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Cbutton1Component } from '../../cbutton1/cbutton1.component';
import { NewsComponent } from "../../news/news.component";
import { Cbutton2Component } from '../../cbutton2/cbutton2.component';

@Component({
  selector: 'app-newspage',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, Cbutton1Component, Cbutton2Component, NewsComponent],
  templateUrl: './newspage.component.html',
  styleUrl: './newspage.component.scss'
})
export class NewspageComponent {
  isVisible:boolean = true;
  
  keyTakeAways = [
    {title: 'Summary Point Number One', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,e laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'},
    {title: 'Summary Point Number Two', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'},
    {title: 'Summary Point Number Three', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'},
  ];

  links = [
    {img: '../../../assets/news/whizzicon.png', imgUrl:''},
    {img: '../../../assets/news/whizz.png', imgUrl:''},
    {img: '../../../assets/news/linkedIn.png', imgUrl:''},
    {img: '../../../assets/news/youtube.png', imgUrl:''},
  ];

 timelines:any[] = [
  {title: 'Timeline Item 1'},
  {title: 'Timeline Item 2'},
  {title: 'Timeline Item 3'},
  {title: 'Timeline Item 4'},
  {title: 'Timeline Item 5'},
 ];

 bulletpoints:any[] = [
  {title: 'Title', desc: 'Description of bullet point'},
  {title: 'Title', desc: 'Description of bullet point'},
  {title: 'Title', desc: 'Description of bullet point'},
  {title: 'Title', desc: 'Description of bullet point'},
  {title: 'Title', desc: 'Description of bullet point'},
 ];

 subheadings:any[] = [
  {title: 'Section Subheader', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,e laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'},
  {title: 'Section Subheader', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,e laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'},
 ];


}
