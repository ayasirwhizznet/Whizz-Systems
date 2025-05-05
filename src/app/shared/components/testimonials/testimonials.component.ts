import KeenSlider from 'keen-slider';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
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
      desc: 'Whizz Systems is one of the best design partners I have worked with. Their technical expertise and depth of staff are outstanding. From SOW to execution, Whizz’s project management is always on target. Deadlines and deliverables are consistently met. They have a wide focus, early in the risk retirement phase of the design process, supply chain, and manufacturability are woven into the process. Without hesitation, Whizz Systems will be at the top of the list for a future product development design partner.',
      imgUrl: 'assets/home/testimonials/profile.png',
      name: 'S. Scott Sober',
      designation: 'SD of Operations at ENDRA Life Sciences',
    }
  ];
}
