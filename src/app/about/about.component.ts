import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbuttonComponent } from '../components/cbutton/cbutton.component';
// import { EChartsOption } from 'echarts';
// import * as echarts from 'echarts';
// import * as worldMap from './worldmap.json';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CbuttonComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})

export class AboutComponent {
  // mapOption: EChartsOption = {};

  // ngOnInit(): void {
  //   this.mapFunction();
  // }

  // mapFunction(): void {
  //   echarts.registerMap('USA', worldMap, {
  //     Alaska: {
  //       left: -131,
  //       top: 25,
  //       width: 15
  //     },
  //     Hawaii: {
  //       left: -110,
  //       top: 28,
  //       width: 5
  //     },
  //     'Puerto Rico': {
  //       left: -76,
  //       top: 26,
  //       width: 2
  //     }
  //   });
  //   this.mapOption = {
  //     title: {
  //       text: 'USA Population Estimates (2012)',
  //       subtext: 'Data from www.census.gov',
  //       sublink: 'http://www.census.gov/popest/data/datasets.html',
  //       left: 'right'
  //     },
  //     tooltip: {
  //       trigger: 'item',
  //       showDelay: 0,
  //       transitionDuration: 0.2
  //     },
  //     visualMap: {
  //       left: 'right',
  //       min: 500000,
  //       max: 38000000,
  //       inRange: {
  //         color: [
  //           '#313695',
  //           '#4575b4',
  //           '#74add1',
  //           '#abd9e9',
  //           '#e0f3f8',
  //           '#ffffbf',
  //           '#fee090',
  //           '#fdae61',
  //           '#f46d43',
  //           '#d73027',
  //           '#a50026'
  //         ]
  //       },
  //       text: ['High', 'Low'],
  //       calculable: true
  //     },
  //     toolbox: {
  //       show: true,
  //       //orient: 'vertical',
  //       left: 'left',
  //       top: 'top',
  //       feature: {
  //         dataView: { readOnly: false },
  //         restore: {},
  //         saveAsImage: {}
  //       }
  //     },
  //     series: [
  //       {
  //         name: 'USA PopEstimates',
  //         type: 'map',
  //         roam: true,
  //         map: 'USA',
  //         emphasis: {
  //           label: {
  //             show: true
  //           }
  //         },
  //         data: [
  //           { name: 'Alabama', value: 4822023 },
  //           { name: 'Alaska', value: 731449 },
  //           { name: 'Arizona', value: 6553255 },
  //           { name: 'Arkansas', value: 2949131 },
  //           { name: 'California', value: 38041430 },
  //           { name: 'Colorado', value: 5187582 },
  //           { name: 'Connecticut', value: 3590347 },
  //           { name: 'Delaware', value: 917092 },
  //           { name: 'District of Columbia', value: 632323 },
  //           { name: 'Florida', value: 19317568 },
  //           { name: 'Georgia', value: 9919945 },
  //           { name: 'Hawaii', value: 1392313 },
  //           { name: 'Idaho', value: 1595728 },
  //           { name: 'Illinois', value: 12875255 },
  //           { name: 'Indiana', value: 6537334 },
  //           { name: 'Iowa', value: 3074186 },
  //           { name: 'Kansas', value: 2885905 },
  //           { name: 'Kentucky', value: 4380415 },
  //           { name: 'Louisiana', value: 4601893 },
  //           { name: 'Maine', value: 1329192 },
  //           { name: 'Maryland', value: 5884563 },
  //           { name: 'Massachusetts', value: 6646144 },
  //           { name: 'Michigan', value: 9883360 },
  //           { name: 'Minnesota', value: 5379139 },
  //           { name: 'Mississippi', value: 2984926 },
  //           { name: 'Missouri', value: 6021988 },
  //           { name: 'Montana', value: 1005141 },
  //           { name: 'Nebraska', value: 1855525 },
  //           { name: 'Nevada', value: 2758931 },
  //           { name: 'New Hampshire', value: 1320718 },
  //           { name: 'New Jersey', value: 8864590 },
  //           { name: 'New Mexico', value: 2085538 },
  //           { name: 'New York', value: 19570261 },
  //           { name: 'North Carolina', value: 9752073 },
  //           { name: 'North Dakota', value: 699628 },
  //           { name: 'Ohio', value: 11544225 },
  //           { name: 'Oklahoma', value: 3814820 },
  //           { name: 'Oregon', value: 3899353 },
  //           { name: 'Pennsylvania', value: 12763536 },
  //           { name: 'Rhode Island', value: 1050292 },
  //           { name: 'South Carolina', value: 4723723 },
  //           { name: 'South Dakota', value: 833354 },
  //           { name: 'Tennessee', value: 6456243 },
  //           { name: 'Texas', value: 26059203 },
  //           { name: 'Utah', value: 2855287 },
  //           { name: 'Vermont', value: 626011 },
  //           { name: 'Virginia', value: 8185867 },
  //           { name: 'Washington', value: 6897012 },
  //           { name: 'West Virginia', value: 1855413 },
  //           { name: 'Wisconsin', value: 5726398 },
  //           { name: 'Wyoming', value: 576412 },
  //           { name: 'Puerto Rico', value: 3667084 }
  //         ]
  //       }
  //     ]
  //   };
  // }

  experience: any = [
    { quantity: '10', sign: '+', title: 'industries served', desc: 'Automotive, medical, aerospace, consumer electronics, and more' },
    { quantity: '10K', sign: '+', title: 'projects completed', desc: 'Trusted globally for delivering complex solutions' },
    { quantity: '140', sign: '+', title: 'experts', desc: `A skilled team driving innovation and excellence` },
    { quantity: '450', sign: '+', title: 'customers worldwide', desc: 'Supporting a diverse client base of industry leaders' },
  ];

  certifications: any = [
    { imgUrl: '../../assets/about/image3.png', name: 'ITAR' },
    { imgUrl: '../../assets/about/image4.png', name: 'ISO 9001: 2015 RevD' },
    { imgUrl: '../../assets/about/image2.png', name: 'ISO 13485:2016' },
    { imgUrl: '../../assets/about/image5.png', name: 'ISO-27001' },
    { imgUrl: '../../assets/about/image1.png', name: 'ISO-14001' },
  ];

  concisely: any = [
    { imgUrl: '../../assets/about/img1.png', title: 'Everything under one roof', desc: 'Feasibility studies, design, prototyping, manufacturing, and compliance.' },
    { imgUrl: '../../assets/about/img2.png', title: 'Flexible & scalable', desc: 'Whether you need a partner for the entire journey or just one part, we are adaptable.' },
    { imgUrl: '../../assets/about/img3.png', title: 'Global teams', desc: 'Our worldwide teams work in unison to accelerate execution with 24/7 collaboration.' },
    { imgUrl: '../../assets/about/img4.png', title: 'Seamless process', desc: 'Streamlined processes across design, testing, manufacturing, and post-delivery support.' },
  ];

  collaborations: any = [
    '../../assets/about/altera.png',
    '../../assets/about/amd.png',
    '../../assets/about/nvidia.png',
    '../../assets/about/amazon.png',
    '../../assets/about/microsoft.png',
    '../../assets/about/keysight.png',
    '../../assets/about/google.png',
    '../../assets/about/advantest.png',
    '../../assets/about/paypal.png',
    '../../assets/about/broadcom.png',
  ];

  passionate: any = [
    { imgUrl: '../../assets/about/Manny-Karim.png', name: 'Manny Karim', designation: 'CEO', desc: 'Manny’s expertise in operations, finance, and manufacturing has been instrumental in Whizz Systems’ success. Starting his career at Pentagon Systems in 1989, Manny co-founded Whizz Systems and developed a robust team and processes ensuring maximum efficiency without compromising quality. He oversees 4 state-of-the-art assembly lines in Santa Clara and 2 facilities in Malaysia.' },
    { imgUrl: '../../assets/about/Muuhammad-Irfan.png', name: 'Muhammad Irfan', designation: 'President', desc: `With a background in product development and manufacturing services, Muhammad co-founded Whizz Systems in 1999. His leadership has driven Whizz Systems' global presence across 3 continents, serving industries like computing, networking, medical, and defense.` },
  ];
}

