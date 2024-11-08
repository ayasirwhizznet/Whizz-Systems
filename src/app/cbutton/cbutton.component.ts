import { NgIf } from '@angular/common';
import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cbutton',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './cbutton.component.html',
  styleUrl: './cbutton.component.scss'
})
export class CbuttonComponent {
  @Input() routerLink!: string; 
  @Input() heading: string = 'Default';
  @Input() icon: string | null = null;
}
