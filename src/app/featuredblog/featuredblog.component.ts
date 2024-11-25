import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsbuttonComponent } from "../newsbutton/newsbutton.component";
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-featuredblog',
  standalone: true,
  imports: [RouterLink, NewsbuttonComponent, NgFor, NgClass],
  templateUrl: './featuredblog.component.html',
  styleUrl: './featuredblog.component.scss'
})
export class FeaturedblogComponent {
  @Input() date: string | null = null;
  @Input() blogTitle: string | null = null;

  blogData:any[] = [
    {date: 'July 9, 2024', blogTitle: 'Interesting Blog Title that Can Fit On Two Lines'},
    {date: 'July 9, 2024', blogTitle: 'Interesting Blog Title that Can Fit On Two Lines'},
    {date: 'July 9, 2024', blogTitle: 'Interesting Blog Title that Can Fit On Two Lines'},
  ];
}
