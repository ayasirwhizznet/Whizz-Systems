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
      content: 'Innovating Designs for the Next Generation of Electronics.',
      link: '/404'
    },
    {
      imgUrl: '../../assets/services/npi.png',
      title: 'NPI',
      content: 'Accelerating your product launch with rapid prototyping and efficient NPI processes.',
      link: '/services/npi'
    },
    {
      imgUrl: '../../assets/services/advanced-manfacuring.png',
      title: 'Advanced Manufacturing',
      content: 'World-class manufacturing to meet complex demands, ensuring quality and efficiency.',
      link: '/services/advanced_manufacturing'
    },
    {
      imgUrl: '../../assets/services/lab-test.png',
      title: 'Lab Testing Solutions',
      content: 'Ensuring product reliability and compliance through comprehensive validation.',
      link: '/services/lab_testing_solutions'
    },
    {
      imgUrl: '../../assets/services/supply-chain.jfif',
      title: 'Supply Chain Management & Design',
      content: 'Streamlining your supply chain with integrated sourcing, compliance, and procurement solutions, so you can rely on a single, trusted partner.',
      link: '/services/supply_chain_management'
    },
    {
      imgUrl: '../../assets/services/sustainable.jfif',
      title: 'Sustaining Engineering & Obsolescence Management',
      content: 'Keeping your product lines future-proof with proactive support and obsolescence solutions.',
      link: '/404'
    },
  ];

  @ViewChild("sliderRef") sliderRef = {} as ElementRef;

  slider: any = null;
  progress = {
    maxIdx:5,
    abs:0
  };
  totalSlides = this.cards.length;
  
  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slideChanged: (slider) => {
        this.progress = slider.track.details;
      },

      breakpoints: {
        "(min-width: 640px)": {
          
          slides: {
            perView: 1,
            spacing: 30,
          },
          
        } ,
        "(min-width: 768px)": {
          slides: {
            perView:2,
            spacing: 80,
          },
        },
        "(min-width: 1200px)": {
          slides: {
            perView: 4,
            spacing: 35,
          },
        },
        "(min-width: 1700px)": {
          slides: {
            perView: 4,
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

      this.slider.next();
   
  }

  prevSlide() {
   
      this.slider.prev();
 
  }
  
}
