import { Component } from '@angular/core';
import { CbuttonComponent } from '../cbutton/cbutton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CbuttonComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
certifications:any = [
  {imgUrl: '../../assets/about/image1.png', name: 'ISO-14001'},
  {imgUrl: '../../assets/about/image2.png', name: 'ISO 13485:2016'},
  {imgUrl: '../../assets/about/image3.png', name: 'ISO 9001: 2015 RevD'},
  {imgUrl: '../../assets/about/image4.png', name: 'ITAR'},
  {imgUrl: '../../assets/about/image5.png', name: 'ISO-27001'},
];

concisely:any = [
  {title: 'Everything Under One Roof', desc: 'Feasibility studies, design, prototyping, manufacturing, and compliance.'},
  {title: 'Flexible & Scalable', desc: 'Whether you need a partner for the entire journey or just one part, we are adaptable.'},
  {title: 'Global Teams', desc: 'Our worldwide teams work in unison to accelerate execution with 24/7 collaboration.'},
  {title: 'Seamless Process', desc: 'Streamlined processes across design, testing, manufacturing, and post-delivery support.'},
];
}
