import { Component } from '@angular/core';
import { FeaturedblogComponent } from "../../featuredblog/featuredblog.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FeaturedblogComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

}
