import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { ServicesCardComponent } from "../services-card/services-card.component";
import { NgFor } from '@angular/common';
import { CbuttonComponent } from "../cbutton/cbutton.component";
import 'keen-slider/keen-slider.css'
import KeenSlider from "keen-slider";
import { RarrowbuttonComponent } from "../rarrowbutton/rarrowbutton.component";
import { LarrowbuttonComponent } from "../larrowbutton/larrowbutton.component";

@Component({
  selector: 'app-cservices',
  standalone: true,
  imports: [ServicesCardComponent, NgFor, CbuttonComponent, RarrowbuttonComponent, LarrowbuttonComponent],
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
      content: 'World-class manufacturing to meet complex demands, ensuring quality and efficiency.'
    },
    {
      imgUrl: '../../assets/services/lab-test.png',
      title: 'Lab Testing Solutions',
      content: 'Ensuring product reliability and compliance through comprehensive validation.'
    },
  ];

  @ViewChild("sliderRef") sliderRef = {} as ElementRef;

  slider: any = null;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {

      breakpoints: {
        "(min-width: 640px)": {
          loop: true,
          slides: {
            perView: 1,
            spacing: 50,
          },
        } ,
        "(min-width: 768px)": {
          loop: true,
          slides: {
            perView: 2,
            spacing: 50,
          },
        },
        "(min-width: 1200px)": {
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
