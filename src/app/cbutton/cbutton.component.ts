import { NgIf } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cbutton',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cbutton.component.html',
  styleUrl: './cbutton.component.scss'
})
export class CbuttonComponent {
  @Input() heading: string = 'Default';
  @Input() icon: string | null = null;
}
