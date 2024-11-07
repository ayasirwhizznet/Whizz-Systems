import KeenSlider from 'keen-slider';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';

const animation = { duration: 10000, easing: (t: number) => t }
const sanimation = { duration: 4000, easing: (t: number) => t }
@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust.component.html',
  styleUrl: './trust.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrustComponent {

  companies = [
    '../../assets/trust/altera.png',
    '../../assets/trust/amd.png',
    '../../assets/trust/nvidia.png',
    '../../assets/trust/amazon.png',
    '../../assets/trust/microsoft.png',
    '../../assets/trust/keysight.png',
    '../../assets/trust/google.png',
  ];
  @ViewChild("sliderRef") sliderRef = {} as ElementRef;

  slider: any = null;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {

      breakpoints: {
        
        "(min-width: 640px)": {
          loop: true,
          mode: "snap",
          slides: {
            perView: 3,
            spacing: 50,
          },
          created(s) {
            s.moveToIdx(5, true, sanimation)
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, sanimation)
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, sanimation)
          },
        },
        "(min-width: 768px)": {
          loop: true,
          mode: "snap",
          slides: {
            perView: 4,
            spacing: 30,
          },
          created(s) {
            s.moveToIdx(5, true, animation)
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
          },
        },
        "(min-width: 1200px)": {
          loop: true,
          mode: "snap",
          slides: {
            perView: 7,
            spacing: 50,
          },
          created(s) {
            s.moveToIdx(5, true, animation)
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
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
