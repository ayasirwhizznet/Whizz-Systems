import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './testimonial-card.component.html'
})
export class TestimonialCardComponent {
  @Input() desc: string = '';
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() designation: string = '';
}
