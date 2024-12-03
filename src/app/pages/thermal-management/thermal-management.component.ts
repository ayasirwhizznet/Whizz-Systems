import { Component, OnInit } from '@angular/core';
import { CbuttonComponent } from '../../cbutton/cbutton.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thermal-management',
  standalone: true,
  imports: [CbuttonComponent, CommonModule],
  templateUrl: './thermal-management.component.html',
  styleUrl: './thermal-management.component.scss'
})
export class ThermalManagementComponent  implements OnInit {

  titleSlug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the 'title' parameter from the route
    this.route.paramMap.subscribe(params => {
      this.titleSlug = params.get('title') || ''; // Get the 'title' parameter
      
    });
  }

  coreServices:any[] = [
    {imgUrl: '../../../assets/thermal-management/cfd.png', title: 'Thermal and CFD Analysis', desc: ' Simulating airflow and heat distribution to identify hotspots and optimize system performance.'},
    {imgUrl: '../../../assets/thermal-management/custom-designs.png', title: 'Custom Thermal Designs', desc: 'Tailored designs for high-power components and space-limited systems.'},
    {imgUrl: '../../../assets/thermal-management/cooling-systems.png', title: 'Advanced Cooling Systems', desc: ' Vapor chambers, cold plates, liquid cooling, and integrated heatsink-enclosure designs for complex needs.'},
    {imgUrl: '../../../assets/thermal-management/parametric.png', title: 'Parametric Studies', desc: 'Software-based thermal characterization to ensure optimal performance.'}
  ];

  benefits:any[] = [
    {imgUrl:'../../../assets/thermal-management/benefits.png', title: 'Decades of Expertise', desc: 'Over 25 years of success in electronic design and optimization.'},
    {imgUrl:'../../../assets/thermal-management/benefits.png', title: 'Tailored Solutions', desc: 'Custom thermal strategies for unique product requirements.'},
    {imgUrl:'../../../assets/thermal-management/benefits.png', title: 'Advanced Simulation Tools', desc: 'Accurate heat and airflow modeling using CFD analysis.'},
    {imgUrl:'../../../assets/thermal-management/benefits.png', title: 'Cutting-Edge Cooling Tech', desc: 'Vapor chambers, liquid cooling systems, and integrated designs.'},
    {imgUrl:'../../../assets/thermal-management/benefits.png', title: 'Reliability in Any Environment', desc: 'Designs that meet thermal limits in even the most demanding conditions.'},
    {imgUrl:'../../../assets/thermal-management/benefits.png', title: 'Comprehensive Support', desc: 'From concept to optimization, we’re with you every step of the way.'},
  ];
}
