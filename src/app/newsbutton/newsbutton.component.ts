import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-newsbutton',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './newsbutton.component.html',
  styleUrl: './newsbutton.component.scss'
})
export class NewsbuttonComponent {
@Input() heading:string = '';
@Input() routerLink!: string;
}
