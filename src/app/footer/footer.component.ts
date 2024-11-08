import { Component } from '@angular/core';
import { CbuttonComponent } from "../cbutton/cbutton.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CbuttonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
