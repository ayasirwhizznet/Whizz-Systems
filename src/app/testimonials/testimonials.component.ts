import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { NgFor } from '@angular/common';
import { CbuttonComponent } from "../cbutton/cbutton.component";

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonialCardComponent, NgFor, CbuttonComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialsComponent {
  cards = [
    {
      desc: 'Sed suscipit, augue id rutrum efficitur, mi enim malesuada risus, non laoreet nulla ante in nulla. Suspendisse vel tincidunt augue. Proin sed risus venenatis, luctus arcu non, tempor dolor. Phasellus sed posuere risus, luctus hendrerit sapien. Nunc vel ornare diam. Cras finibus massa quis erat ultrices faucibus. Fusce sed justo finibus, interdum urna laoreet, sagittis erat. Mauris in semper dui.',
      imageUrl: '../../assets/testimonials/profile.jpg',
      name: 'Stevan Logan',
      designation: 'Marketing at Xilinix'
    },
    {
      desc: 'Sed suscipit, augue id rutrum efficitur, mi enim malesuada risus, non laoreet nulla ante in nulla. Suspendisse vel tincidunt augue. Proin sed risus venenatis, luctus arcu non, tempor dolor. Phasellus sed posuere risus, luctus hendrerit sapien. Nunc vel ornare diam. Cras finibus massa quis erat ultrices faucibus. Fusce sed justo finibus, interdum urna laoreet, sagittis erat. Mauris in semper dui.',
      imageUrl: '../../assets/testimonials/profile.jpg',
      name: 'Stevan Logan',
      designation: 'Marketing at Xilinix'
    },
    {
      desc: 'Integer pellentesque nisi feugiat enim consectetur iaculis. Phasellus nec elit fringilla, pulvinar leo at, ultricies leo. Mauris tortor mi, ornare eget bibendum quis, aliquet et lectus. Nam vitae libero sem. Donec facilisis diam vitae iaculis aliquet. Sed suscipit ex et lacus placerat volutpat. Morbi consectetur quam ac est tristique, a pulvinar enim placerat. Sed pulvinar malesuada ex a porta.',
      imageUrl: '../../assets/testimonials/profile.jpg',
      name: 'Stevan Logan',
      designation: 'Marketing at Xilinix'
    },

  ];
  
}
