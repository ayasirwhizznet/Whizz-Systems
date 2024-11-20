import KeenSlider from 'keen-slider';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { NgFor } from '@angular/common';
import { RarrowbuttonComponent } from '../rarrowbutton/rarrowbutton.component';
import { LarrowbuttonComponent } from '../larrowbutton/larrowbutton.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonialCardComponent, NgFor, RarrowbuttonComponent, LarrowbuttonComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialsComponent {
  cards = [
    {
      desc: 'When I needed a board customization in a hurry, Whizz was there for me. They were able to get the boards back to me the next day. I get my demos up running quickly.',
      imageUrl: '../../assets/testimonials/profile.jpg',
      name: 'Stevan Logan',
      designation: 'Marketing at Xilinix'
    },
    {
      desc: `NVIDIA works closely with Whizz to build our Tegra mobile reference platforms. These platforms are very complex and we demand extremely quick turn times and high yield which is always delivered on time with the high quality we expect. . Whizz Team is extremely competent, easy to work with and very customer focused. They have
a great track record with us`,
      imageUrl: '../../assets/testimonials/profile.jpg',
      name: 'David Weigand',
      designation: 'VP of Engineering at NVIDIA'
    },
    {
      desc: 'I have been working with them and again wonderful service, I know what I am going to get, there is no surprises, they deliver on time and their rates are good and they are low cost so I can use them all the time. It’s a just a wonderful relationship and I refer all my clients to them, I refer all my companies to them and will be using them for a long time…',
      imageUrl: '../../assets/testimonials/profile.jpg',
      name: 'Neil Mammen',
      designation: 'Industry Expert'
    },
  ];

  @ViewChild("sliderRef") sliderRef = {} as ElementRef;

  slider: any = null;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {

    
      breakpoints: {
        "(min-width: 640px)": {
          drag: false,
          loop: true,
          slides: {
            perView: 1,
            spacing: 50,
          },
        } ,
        "(min-width: 768px)": {
          drag: false,
          loop: true,
          slides: {
            perView: 2,
            spacing: 50,
          },
        },
        "(min-width: 1200px)": {
          drag: false,
          loop: true,
          slides: {
            perView: 3,
            spacing: 60,
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
