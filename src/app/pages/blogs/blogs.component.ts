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
  // blogsData:any[] = [
  //   {date: 'July 9, 2024', blogTitle: 'Interesting Blog Title that can Fit On Two Lines'},
  //   {date: 'July 9, 2024', blogTitle: 'Interesting Blog Title that can Fit On Two Lines'},
  //   {date: 'July 9, 2024', blogTitle: 'Interesting Blog Title that can Fit On Two Lines'},
  // ];
}
