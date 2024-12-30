import { Component } from '@angular/core';
import { CbuttonComponent } from '../../../components/cbutton/cbutton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-power-delivery',
  standalone: true,
  imports: [CbuttonComponent, CommonModule],
  templateUrl: './power-delivery.component.html',
  styleUrl: './power-delivery.component.scss'
})
export class PowerDeliveryComponent {
  coreServices:any = [
    {imgUrl: '../../../assets/power-delivery/core-services.png', title: 'DC Power Analysis', desc: 'IR Drop Analysis, Current Density Analysis, Joule Heating Simulations.'},
    {imgUrl: '../../../assets/power-delivery/core-services.png', title: 'AC Power Analysis', desc: 'Capacitor Optimization & Impedance Reduction.'},
    {imgUrl: '../../../assets/power-delivery/core-services.png', title: 'End-to-End Layout Optimization', desc: 'Enhancing reliability by embedding simulation insights into PCB designs.'}
  ];

  benefits:any = [
    {imgUrl: '../../../assets/power-delivery/benefits.png', title: 'Lorem Ipsum', desc: 'Advanced DC and AC simulation capabilities tailored to your design needs.'},
    {imgUrl: '../../../assets/power-delivery/benefits.png', title: 'Lorem Ipsum', desc: 'Expertise in high-performance PCB layouts for modern electronics.'},
    {imgUrl: '../../../assets/power-delivery/benefits.png', title: 'Lorem Ipsum', desc: 'Reduction of design risks and iterations, ensuring faster time-to-market.'},
    {imgUrl: '../../../assets/power-delivery/benefits.png', title: 'Lorem Ipsum', desc: 'Proven reliability and efficiency across industries.'},
  ];
}
