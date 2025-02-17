import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';

@Component({
  selector: 'app-thermal-management',
  standalone: true,
  imports: [
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesContactExpertsComponent,
    ServicesCoreServicesComponent,
    ServicesBenefitsComponent,
  ],
  templateUrl: './thermal-management.component.html',
})
export class ThermalManagementComponent implements OnInit {
  titleSlug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.titleSlug = params.get('title') || '';
    });
  }

  coreServices: any[] = [
    {
      imgUrl: 'assets/thermal-management/cfd.png',
      name: 'Thermal and CFD Analysis',
      desc: 'Simulating airflow and heat distribution to identify hotspots and optimize system performance.',
    },
    {
      imgUrl: 'assets/thermal-management/custom-designs.png',
      name: 'Custom Thermal Designs',
      desc: 'Tailored designs for high-power components and space-limited systems.',
    },
    {
      imgUrl: 'assets/thermal-management/cooling-systems.png',
      name: 'Advanced Cooling Systems',
      desc: 'Vapor chambers, cold plates, liquid cooling, and integrated heatsink-enclosure designs for complex needs.',
    },
    {
      imgUrl: 'assets/thermal-management/parametric.png',
      name: 'Parametric Studies',
      desc: 'Software-based thermal characterization to ensure optimal performance.',
    },
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/thermal-management/benefits.png',
      name: 'Decades of Expertise',
      desc: 'Over 25 years of success in electronic design and optimization.',
    },
    {
      imgUrl: 'assets/thermal-management/benefits.png',
      name: 'Tailored Solutions',
      desc: 'Custom thermal strategies for unique product requirements.',
    },
    {
      imgUrl: 'assets/thermal-management/benefits.png',
      name: 'Advanced Simulation Tools',
      desc: 'Accurate heat and airflow modeling using CFD analysis.',
    },
    {
      imgUrl: 'assets/thermal-management/benefits.png',
      name: 'Cutting-Edge Cooling Tech',
      desc: 'Vapor chambers, liquid cooling systems, and integrated designs.',
    },
    {
      imgUrl: 'assets/thermal-management/benefits.png',
      name: 'Reliability in Any Environment',
      desc: 'Designs that meet thermal limits in even the most demanding conditions.',
    },
    {
      imgUrl: 'assets/thermal-management/benefits.png',
      name: 'Comprehensive Support',
      desc: 'From concept to optimization, we’re with you every step of the way.',
    },
  ];
}
