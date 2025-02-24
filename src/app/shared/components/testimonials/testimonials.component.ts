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
      desc: 'When I needed a board customization in a hurry, Whizz was there for me. They were able to get the boards back to me the next day. I get my demos up running quickly.',
      imgUrl: 'assets/home/testimonials/profile.png',
      name: 'Stevan Logan',
      designation: 'Marketing at Xilinix',
    },
    {
      desc: `NVIDIA works closely with Whizz to build our Tegra mobile reference platforms. These platforms are very complex and we demand extremely quick turn times and high yield which is always delivered on time with the high quality we expect. . Whizz Team is extremely competent, easy to work with and very customer focused. They have
a great track record with us`,
      imgUrl: 'assets/home/testimonials/profile.png',
      name: 'David Weigand',
      designation: 'VP of Engineering at NVIDIA',
    },
    {
      desc: 'I have been working with them and again wonderful service, I know what I am going to get, there is no surprises, they deliver on time and their rates are good and they are low cost so I can use them all the time. It’s a just a wonderful relationship and I refer all my clients to them, I refer all my companies to them and will be using them for a long time.',
      imgUrl: 'assets/home/testimonials/profile.png',
      name: 'Neil Mammen',
      designation: 'Industry Expert',
    },
    {
      desc: 'Vivamus nec pulvinar metus. Integer fermentum iaculis purus non ultricies. Vivamus bibendum ipsum condimentum aliquet bibendum. Morbi sed facilisis mauris.',
      imgUrl: 'assets/home/testimonials/profile.png',
      name: 'Stevan Logan',
      designation: 'Marketing at Xilinix',
    },
    {
      desc: 'Morbi molestie, quam vel volutpat finibus, libero nisl congue velit, sit amet porta velit felis quis arcu. Fusce nisi risus, placerat in facilisis vel, finibus nec nisl. Fusce porttitor ex erat, quis lacinia erat porttitor eu. In interdum ipsum feugiat libero viverra, id feugiat neque blandit. Donec suscipit pharetra diam a feugiat.',
      imgUrl: 'assets/home/testimonials/profile.png',
      name: 'Stevan Logan',
      designation: 'Marketing at Xilinix',
    },
    {
      desc: 'Vestibulum gravida libero sem, ut imperdiet nibh viverra non. Nulla vestibulum varius purus non tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      imgUrl: 'assets/home/testimonials/profile.png',
      name: 'Stevan Logan',
      designation: 'Marketing at Xilinix',
    },
  ];

  @ViewChild('sliderRef') sliderRef = {} as ElementRef;

  slider: any = null;
  progress = {
    maxIdx: 4,
    abs: 0,
  };
  totalSlides = this.testimonials.length;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slideChanged: (slider) => {
        this.progress = slider.track.details;
      },

      breakpoints: {
        '(min-width: 0px)': {
          slides: {
            perView: 1,
            spacing: 50,
          },
        },
        '(min-width: 640px)': {
          slides: {
            perView: 2,
            spacing: 50,
          },
        },
        '(min-width: 1024px)': {
          slides: {
            perView: 2,
            spacing: 50,
          },
        },
        '(min-width: 1200px)': {
          slides: {
            perView: 3,
            spacing: 60,
          },
        },
        '(min-width: 1536px)': {
          slides: {
            perView: 3,
            spacing: 75,
          },
        },
        '(min-width: 1800px)': {
          slides: {
            perView: 3,
            spacing: 96,
          },
        },
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

  nextSlide() {
    this.slider.next();
  }

  prevSlide() {
    this.slider.prev();
  }
}
