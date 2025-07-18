import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

interface Slide {
  title: string;
  subtitle: string;
  content: string;
  categories?: string[];
  imgUrl: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  currentSlide = signal(0);

  slides: Slide[] = [
    {
      title: '25+ Years Building What’s Next',
      subtitle: 'Trusted by the World’s Most Advanced Hardware Teams',
      content:
        'For over two decades, Whizz Systems has delivered high-performance electronic solutions across AI compute, semiconductors, networking, medical, defense, and more. Fortune 500s and high-growth startups count on us to help them bring complex systems to market—faster.',
      categories: [
        '<img class="w-12 sm:w-16 3xl:w-[70px]" src="assets/home/ideas/14001.svg" />',
        '<img class="w-12 sm:w-16 3xl:w-[70px]" src="assets/home/ideas/13485.svg" />',
        '<img class="w-12 sm:w-16 3xl:w-[70px]" src="assets/home/ideas/9001.svg" />',
        '<img class="w-12 sm:w-16 3xl:w-[70px]" src="assets/home/ideas/27001.svg" />',
        '<img class="w-12 sm:w-16 3xl:w-[70px]" src="assets/home/ideas/itar.svg" />',
      ],
      imgUrl: 'assets/home/hero/slide1.png',
    },
    {
      title: 'Pushing For What’s Next',
      subtitle:
        'Engineering the next generation of high-performance systems — today.',
      content:
        'From high-pin-count packages to extreme power and thermal constraints, we engineer complex systems that push performance boundaries in advanced compute platforms.',
      categories: [
        `<div class="flex items-center flex-wrap gap-3 3xl:gap-4">
          <img class="w-8 2xl:w-10 3xl:w-[56px]" src="assets/home/hero/semiconductors.svg" alt="category" />
          <span class="text-xs 2xl:text-sm 3xl:text-base text-white">Semiconductors</span>
        </div>`,
        `<div class="flex items-center flex-wrap gap-3 3xl:gap-4">
          <img class="w-8 2xl:w-10 3xl:w-[56px]" src="assets/home/hero/defence-aerospace.svg" alt="category" />
          <span class="text-xs 2xl:text-sm 3xl:text-base text-white">Defense & Aerospace</span>
        </div>`,
        `<div class="flex items-center flex-wrap gap-3 3xl:gap-4">
          <img class="w-8 2xl:w-10 3xl:w-[56px]" src="assets/home/hero/robotics.svg" alt="category" />
          <span class="text-xs 2xl:text-sm 3xl:text-base text-white">Robotics</span>
        </div>`,
        `<div class="flex items-center flex-wrap gap-3 3xl:gap-4">
          <img class="w-8 2xl:w-10 3xl:w-[56px]" src="assets/home/hero/ai-compute.svg" alt="category" />
          <span class="text-xs 2xl:text-sm 3xl:text-base text-white">AI Compute</span>
        </div>`,
        `<div class="flex items-center flex-wrap gap-3 3xl:gap-4">
          <img class="w-8 2xl:w-10 3xl:w-[56px]" src="assets/home/hero/medical -devices.svg" alt="category" />
          <span class="text-xs 2xl:text-sm 3xl:text-base text-white">Medical Devices</span>
        </div>`,
        `<div class="flex items-center flex-wrap gap-3 3xl:gap-4">
          <img class="w-8 2xl:w-10 3xl:w-[56px]" src="assets/home/hero/servers-data-centers.svg" alt="category" />
          <span class="text-xs 2xl:text-sm 3xl:text-base text-white">Servers & Data Centers</span>
        </div>`,
        `<div class="flex items-center flex-wrap gap-3 3xl:gap-4">
          <img class="w-8 2xl:w-10 3xl:w-[56px]" src="assets/home/hero/cloud-compute.svg" alt="category" />
          <span class="text-xs 2xl:text-sm 3xl:text-base text-white">Cloud Compute</span>
        </div>`,
      ],
      imgUrl: 'assets/home/hero/slide2.png',
    },
    {
      title: 'All-in or Plug-in. You Choose.',
      subtitle: 'Engage at any stage and access only what you need',
      content:
        'Whether starting from concept or scaling an NPI, Whizz Systems delivers flexibility without compromise. All engineering, layout, testing, and manufacturing is handled in-house—ready to plug into your process, wherever you are',

      imgUrl: 'assets/home/hero/slide3.png',
    },
  ];

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
