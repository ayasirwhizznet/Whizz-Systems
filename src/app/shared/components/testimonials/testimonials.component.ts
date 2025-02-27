import KeenSlider from 'keen-slider';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './testimonials.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  testimonials:any[] = [
    {
      desc: 'When I needed a board customization in a hurry, Whizz was there for me. They were able to get the boards back to me the next day. I get my demos up running quickly',
      imgUrl: 'assets/home/testimonials/profile.png',
      name: 'Stevan Logan',
      designation: 'Marketing at Xilinix',
    },
    {
      desc: `I have been working with them and again wonderful service, I know what I am going to get, there is no surprises, they deliver on time and their rates are good and they are low cost so I can use them all the time. It’s a just a wonderful relationship and I refer all my clients to them, I refer all my companies to them and will be using them for a long time…`,
      imgUrl: 'assets/home/testimonials/profile.png',
      name: 'David Weigand',
      designation: 'VP of Engineering at NVIDIA',
    },
    {
      desc: 'I have been working with them and again wonderful service, I know what I am going to get, there is no surprises, they deliver on time and their rates are good and they are low cost so I can use them all the time. It’s a just a wonderful relationship and I refer all my clients to them, I refer all my companies to them and will be using them for a long time…',
      imgUrl: 'assets/home/testimonials/profile.png',
      name: 'Neil Mammen',
      designation: 'Industry Expert',
    }
  ];
}
