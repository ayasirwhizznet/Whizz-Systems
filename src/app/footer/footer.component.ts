import { Component } from '@angular/core';
import { Cbutton1Component } from '../cbutton1/cbutton1.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Cbutton1Component],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
