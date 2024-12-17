import { Component } from '@angular/core';
import { CbuttonComponent } from '../cbutton/cbutton.component';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation, Inject } from '@angular/core';
import {
  MapsTheme,
  Maps,
  Legend,
  Marker,
  MapsTooltip,
  ILoadEventArgs,
  MapsModule,
} from '@syncfusion/ej2-angular-maps';

Maps.Inject(Legend, Marker, MapsTooltip);
declare var require: any;
let worldMap: object[] = require('./world-map.json');
let datasource: object[] = require('./default-datasource.json');

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CbuttonComponent, CommonModule, MapsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  encapsulation: ViewEncapsulation.None,

})

export class AboutComponent {
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

  titleSettings: object = {
    text: 'Global Footprint',
    textStyle: {
      size: '16px',
    },
  };
  public zoomSettings: object = {
    enable: false,
  };
  public legendSettings: object = { visible: true };

  public layers: object[] = [
    {
      shapeData: worldMap,
      shapePropertyPath: 'continent',
      shapeDataPath: 'continent',
      dataSource: datasource,
      shapeSettings: { colorValuePath: 'color' },
      markerSettings: [
        {
          visible: true,
          dataSource: [
            {
              latitude: 37.354107,
              longitude: -121.955238,
              name: 'Santa Clara, CA, USA',
            },
            {
              latitude: 4.2105,
              longitude: 101.9758,
              name: 'Malaysia ',
            },
          ],
          shape: '',
          //   imageUrl: './assets/maps/images/ballon.png',
          height: 20,
          width: 20,
          tooltipSettings: { visible: true, valuePath: 'name' },
          animationDuration: 0,
        },
        {
          visible: true,
          template:
            `
          <div style="">
          <div style='width:15px;height:15px;border-radius:15px;border:4px solid #2C353A;margin-bottom:20px; '>
          <div/>
          <div style="position:absolute;left:-65px;top:10px;">
      
          <div style="width: 0;
          height: 0;
          border-left: 9px solid transparent;
          border-right: 9px solid transparent;
          border-bottom: 18px solid #2A494C;"></div>
          <div style="height:150px;width:120px;background-color:#2C353A; border-radius: 8px; padding: 16px">
              <p style="font-weight:500; color:white">Santa Clara, CA, USA</p>
              <hr style="border: 1px solid #D9D9D9">
              <p style="font-weight:300; color:white">35,000 Square Foot Facility</p>
              <hr style="border: 1px solid #D9D9D9">
              <p style="font-weight:300; color:white">95 Employees</p>
              <hr style="border: 1px solid #D9D9D9">
              <p style="font-weight:300; color:white">SPI, FP, AOI, X-RAY</p>
              <hr style="border: 1px solid #D9D9D9">
              <p style="font-weight:300; color:white">4 Juki SMT Lines</p>
              <hr style="border: 1px solid #D9D9D9">
              <p style="font-weight:300; color:white">QMS, ITAR</p>
              <hr style="border: 1px solid #D9D9D9">
          </div>
          </div>
         
          </div>
       
          `,
          dataSource: [{ latitude: 37.354107, longitude: -121.955238 }],
          animationDuration: 0,
        },
        {
          visible: true,
          template:
            `
        <div style="">
          <div style='width:15px;height:15px;border-radius:15px;border:4px solid #2C353A;margin-bottom:20px; '>
          <div/>
          <div style="position:absolute;left:-65px;top:10px;">
      
          <div style="width: 0;
          height: 0;
          border-left: 9px solid transparent;
          border-right: 9px solid transparent;
          border-bottom: 18px solid #2A494C;"></div>
          <div style="height:150px;width:120px;background-color:#2C353A; border-radius: 8px; padding: 16px">
              <p style="font-weight:500; color:white">Malaysia</p>
              <hr style="border: 1px solid #D9D9D9">
              <p style="font-weight:300; color:white">80,000 Square Foot Facility</p>
              <hr style="border: 1px solid #D9D9D9">
              <p style="font-weight:300; color:white">100 Employees</p>
              <hr style="border: 1px solid #D9D9D9">
              <p style="font-weight:300; color:white">SPI, FP, AOI, X-RAY</p>
              <hr style="border: 1px solid #D9D9D9">
              <p style="font-weight:300; color:white">4 Juki SMT Lines</p>
              <hr style="border: 1px solid #D9D9D9">
              <p style="font-weight:300; color:white">QMS</p>
              <hr style="border: 1px solid #D9D9D9">
          </div>
          </div>
         
          </div>
       
        `,
          dataSource: [{ latitude: 4.2105, longitude: 101.9758 }],
          animationDuration: 0,
        },
      ],
    },
  ];

  // custom code start
  constructor() { }
  // custom code end


}

