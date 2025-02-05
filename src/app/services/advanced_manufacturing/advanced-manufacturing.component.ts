import { Component } from '@angular/core';
import { ServicesHeroComponent } from '../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../components/services-intro/services-intro.component';
import { CommonModule } from '@angular/common';
import { CbuttonComponent } from '../../components/cbutton/cbutton.component';

@Component({
  selector: 'app-advanced-manufacturing',
  standalone: true,
  imports: [ServicesHeroComponent, ServicesIntroComponent, CommonModule, CbuttonComponent],
  templateUrl: './advanced-manufacturing.component.html',
})
export class AdvancedManufacturingComponent {
  coreServices:any[] = [
    {imgUrl: '../../../assets/advanced_manufacturing/core-services.png', title: 'Manufacturing Simulations', description: ['Advanced process optimization to enhance manufacturability and reliability.','<b>DFX Analysis (DFM, DFA, DFT):</b> Ensuring smooth and cost-efficient production.', '<b>Failure Mode & Effects Analysis (FMEA):</b> Identifying and mitigating potential failure risks.','<b>Thermal Profiling & Reflow Optimization:</b> Ensuring optimal soldering and heat dissipation.']},
    {imgUrl: '../../../assets/advanced_manufacturing/core-services.png', title: 'Electronic Manufacturing Assembly', description: ['High-precision PCB assembly for complex electronic systems.', 'Expertise in <b>high-pin-count BGAs, micro-pitch components, and high-speed interconnects.', 'Flexible production from prototype to high-volume manufacturing.</b>']},
    {imgUrl: '../../../assets/advanced_manufacturing/core-services.png', title: 'Mechanical Assembly', description: ['Full electromechanical integration with <b>custom enclosures and robust housing solutions.</b>','Expertise in thermal management, structural integrity, and environmental durability.']},
    {imgUrl: '../../../assets/advanced_manufacturing/core-services.png', title: 'System Build & Packaging Design', description: ['<b>Turnkey box builds</b> and final system integration.','Custom <b>packaging solutions</b> for shipping, distribution, and end-user experience.','Ability to ship directly to customers or distribution centers.']}
  ];

  locations:any[] = [
    {title: 'Prototyping & Small-Batch Manufacturing ', address: 'California, USA', desc: ['Rapid prototyping and low-to-mid volume assembly', 'Ideal for complex, high-mix projects requiring hands-on engineering support.', 'Close collaboration between design and manufacturing teams.']},
    {title: 'High-Volume Manufacturing', address: 'Malaysia', desc: ['Cost-effective mass production with high yield rates.', 'Dedicated offshore QC & technical support to maintain quality.', 'Early design-phase planning for optimized manufacturability & supply chain efficiency.']}
  ];

  benefits:any[] = [
    {imgUrl: '../../../assets/advanced_manufacturing/benefits.png', title: 'Integrated Workflow', desc: 'Real-time collaboration between design, manufacturing, and supply chain teams.'},
    {imgUrl: '../../../assets/advanced_manufacturing/benefits.png', title: 'Parallel Process Optimization', desc: 'Simultaneous simulations lead to higher efficiency and better quality.'},
    {imgUrl: '../../../assets/advanced_manufacturing/benefits.png', title: 'Strategic Component Selection', desc: 'Ensuring long-term availability, cost efficiency, and supply stability.'},
    {imgUrl: '../../../assets/advanced_manufacturing/benefits.png', title: 'Predictive Problem-Solving', desc: 'Early-stage FMEA and DFX analysis reduce risks and improve reliability.'},
    {imgUrl: '../../../assets/advanced_manufacturing/benefits.png', title: 'Optimized Thermal & Mechanical Performance', desc: 'Advanced profiling for superior product durability.'},
    {imgUrl: '../../../assets/advanced_manufacturing/benefits.png', title: 'Streamlined Global Manufacturing', desc: 'Seamless transition from prototyping to high-volume production.'}
  ];
}
