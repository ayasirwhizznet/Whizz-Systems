import { Component, Input, AfterViewInit,Renderer2,OnInit,Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { Swiper } from 'swiper';
import { CbuttonComponent } from "../cbutton/cbutton.component";

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [NgIf, CbuttonComponent],
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesCardComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() content: string = '';

  constructor() { 
  
    
  }

  // Initialize Swiper after the component's view is fully initialized
 public ngOnInit(): void {
    const swiperEl = document.querySelector('swiper-container')
    if (swiperEl) {
      new Swiper(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });
    }
  }
}
