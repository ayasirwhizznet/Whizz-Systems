import { NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './services-card.component.html',
})
export class ServicesCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() RouterLink: string = '';
}
