import { ServicesBenefitsComponent } from './../../../components/services-benefits/services-benefits.component';
import { Component} from '@angular/core';
import { ServicesHeroComponent } from '../../../components/services-hero/services-hero.component';
import { ServicesCaseStudyComponent } from '../../../components/services-case-study/services-case-study.component';
import { ServicesContactExpertsComponent } from '../../../components/services-contact-experts/services-contact-experts.component';
import { ServicesCoreServicesComponent } from '../../../components/services-core-services/services-core-services.component';

@Component({
  selector: 'app-modeling',
  standalone: true,
  imports: [ServicesHeroComponent, ServicesCaseStudyComponent, ServicesContactExpertsComponent, ServicesCoreServicesComponent, ServicesBenefitsComponent],
  templateUrl: './modeling.component.html',
  styleUrl: './modeling.component.scss'
})
export class ModelingComponent  {

  coreServices:any[] = [
    {imgUrl: '../../../assets/3D-Modeling/assembly.png', title: '3D Models & 2D Assembly Drawings', desc: 'Detailed, standards-compliant PCB component designs. Custom designs ensuring functionality and durability.'},
    {imgUrl: '../../../assets/3D-Modeling/advanced.png', title: 'Advanced Mechanical Component Design', desc: 'Specialized solutions for I/O brackets, trays, and ingress-protected enclosures. Pole-mounted or wall-mounted solutions.'},
    {imgUrl: '../../../assets/3D-Modeling/fea.png', title: 'Finite Element Analysis (FEA)', desc: 'Structural analysis for longevity and performance. Identifying structural weaknesses before production.'},
  ];

  benefits:any[] = [
    {imgUrl:'../../../assets/3D-Modeling/benefits.png', title: '25+ Years of Expertise', desc: 'Proven success in designing electronic products from concept to production.'},
    {imgUrl:'../../../assets/3D-Modeling/benefits.png', title: 'Multidomain Knowledge', desc: 'Extensive experience across various industries.'},
    {imgUrl:'../../../assets/3D-Modeling/benefits.png', title: 'Optimized for Performance and Manufacturability', desc: 'Ensuring products meet and exceed industrial standards.'},
    {imgUrl:'../../../assets/3D-Modeling/benefits.png', title: 'Comprehensive Support', desc: 'Full design expertise throughout the entire process.'},
    {imgUrl:'../../../assets/3D-Modeling/benefits.png', title: 'Sustaining Engineering', desc: 'Enhanced product integration and longevity through FEA analysis.'},
    {imgUrl:'../../../assets/3D-Modeling/benefits.png', title: 'Supply Chain Management', desc: 'Seamless supply chain handling to ensure efficient production and timely delivery.'},
  ];
}
