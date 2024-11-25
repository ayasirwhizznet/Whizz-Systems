import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featuredblog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featuredblog.component.html',
  styleUrl: './featuredblog.component.scss'
})
export class FeaturedblogComponent {
  // @Input() date: string | null = null;
  // @Input() blogTitle: string | null = null;
}
