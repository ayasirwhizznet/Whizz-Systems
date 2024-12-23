import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CbuttonComponent } from "../cbutton/cbutton.component";
import { NewsbuttonComponent } from "../newsbutton/newsbutton.component";

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [NgIf, NewsbuttonComponent],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input() imageUrl: string = '';
  @Input() date: string = '';
  @Input() title: string='';
}
