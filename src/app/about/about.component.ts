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
experience:any =[
    {quantity: '10', sign: '+', title: 'industries served', desc: 'Automotive, medical, aerospace, consumer electronics, and more'},
    {quantity: '10K', sign: '+', title: 'projects completed', desc: 'Trusted globally for delivering complex solutions'},
    {quantity: '140', sign: '+', title: 'experts', desc: `A skilled team driving innovation
and excellence`},
    {quantity: '450', sign: '+', title: 'customers worldwide', desc: 'Supporting a diverse client base of industry leaders'},
  ];

certifications:any = [
  {imgUrl: '../../assets/about/image3.png', name: 'ITAR'},
  {imgUrl: '../../assets/about/image4.png', name: 'ISO 9001: 2015 RevD'},
  {imgUrl: '../../assets/about/image2.png', name: 'ISO 13485:2016'},
  {imgUrl: '../../assets/about/image5.png', name: 'ISO-27001'},
  {imgUrl: '../../assets/about/image1.png', name: 'ISO-14001'},
];

concisely:any = [
  {imgUrl: '../../assets/about/img1.png', title: 'Everything under one roof', desc: 'Feasibility studies, design, prototyping, manufacturing, and compliance.'},
  {imgUrl: '../../assets/about/img2.png', title: 'Flexible & scalable', desc: 'Whether you need a partner for the entire journey or just one part, we are adaptable.'},
  {imgUrl: '../../assets/about/img3.png', title: 'Global teams', desc: 'Our worldwide teams work in unison to accelerate execution with 24/7 collaboration.'},
  {imgUrl: '../../assets/about/img4.png', title: 'Seamless process', desc: 'Streamlined processes across design, testing, manufacturing, and post-delivery support.'},
];
}
