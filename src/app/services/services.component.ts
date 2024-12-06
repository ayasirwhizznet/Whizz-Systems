import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { ServicesCardComponent } from "../services-card/services-card.component";
import { NgFor, NgIf } from '@angular/common';
import { CbuttonComponent } from "../cbutton/cbutton.component";
import 'keen-slider/keen-slider.css'
import KeenSlider from "keen-slider";
import { RarrowbuttonComponent } from "../rarrowbutton/rarrowbutton.component";
import { LarrowbuttonComponent } from "../larrowbutton/larrowbutton.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cservices',
  standalone: true,
  imports: [ServicesCardComponent, NgFor, CbuttonComponent, RarrowbuttonComponent, LarrowbuttonComponent, RouterLink,NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesComponent {
  cards = [
    {
      imgUrl: '../../assets/services/engg.&design.png',
      title: 'Engineering & design',
      content: 'Innovating Designs for the Next Generation of Electronics.'
    },
    {
      imgUrl: '../../assets/services/npi.png',
      title: 'NPI',
      content: 'Accelerating your product launch with rapid prototyping and efficient NPI processes.'
    },
    {
      imgUrl: '../../assets/services/advanced-manfacuring.png',
      title: 'Advanced Manufacturing',
      content: 'World-class manufacturing to meet complex demands, ensuring quality and efficiency.',
    },
    {
      imgUrl: '../../assets/services/lab-test.png',
      title: 'Lab Testing Solutions',
      content: 'Ensuring product reliability and compliance through comprehensive validation.',
    },
    {
      imgUrl: '../../assets/services/supply-chain.jfif',
      title: 'Supply Chain Management & Design',
      content: 'Streamlining your supply chain with integrated sourcing, compliance, and procurement solutions, so you can rely on a single, trusted partner.',
    },
    {
      imgUrl: '../../assets/services/sustainable.jfif',
      title: 'Sustaining Engineering & Obsolescence Management',
      content: 'Keeping your product lines future-proof with proactive support and obsolescence solutions.',
    },
  ];

  @ViewChild("sliderRef") sliderRef = {} as ElementRef;

  slider: any = null;
  progress = 0;
  totalSlides = this.cards.length;
  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slideChanged: (slider) => {
        this.progress = slider.track.details.progress;
      },

      breakpoints: {
        "(min-width: 640px)": {
          
          slides: {
            perView: 0.96,
            spacing: 30,
          },
          
        } ,
        "(min-width: 768px)": {
          slides: {
            perView: 1.96,
            spacing: 100,
          },
        },
        "(min-width: 1200px)": {
          slides: {
            perView: 2.96,
            spacing: 90,
          },
        },
        "(min-width: 1700px)": {
          slides: {
            perView: 3.96,
            spacing: 70,
          },
        },
      },
    });
  }
  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

  nextSlide() {
    if (this.progress < this.totalSlides - 1) {
      this.slider.next();
    }
  }

  prevSlide() {
    if (this.progress > 0) {
      this.slider.prev();
    }
  }
  
}
