import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { ServicesCardComponent } from "../services-card/services-card.component";
import { NgFor } from '@angular/common';
import { CbuttonComponent } from "../cbutton/cbutton.component";
import 'keen-slider/keen-slider.css'
import KeenSlider from "keen-slider";

@Component({
  selector: 'app-cservices',
  standalone: true,
  imports: [ServicesCardComponent, NgFor, CbuttonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesComponent {
  cards = [
    {
      imgUrl: '../../assets/services/engg.&design.png',
      title: 'Engineering & design',
      content: 'Innovating Designs for the Next Generation of Electronics ensuring quality and efficiency.'
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
      title: 'Lab Tsting Solutions',
      content: 'Ensuring product reliability and compliance through comprehensive validation.'
    },
  ];

  @ViewChild("sliderRef") sliderRef = {} as ElementRef;

  slider: any = null;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {

      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 1,
            spacing: 50,
          },
        } ,
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 50,
          },
        },
        "(min-width: 1200px)": {
          loop: true,
          mode: "snap",
          slides: {
            perView: 4,
            spacing: 50,
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
