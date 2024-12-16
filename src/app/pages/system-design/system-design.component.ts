import { Component } from '@angular/core';
import { CbuttonComponent } from '../../cbutton/cbutton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system-design',
  standalone: true,
  imports: [CbuttonComponent, CommonModule],
  templateUrl: './system-design.component.html',
  styleUrl: './system-design.component.scss'
})
export class SystemDesignComponent {
  coreServices:any[] = [
    {imgUrl: '../../../assets/system-design/architecture.png', title: 'Architecture Definition & Block Diagrams', desc: 'Our detailed block diagrams—including functional, power, communication, and synchronization diagrams—serve as blueprints, ensuring subsystem integration and optimal system performance.'},
    {imgUrl: '../../../assets/system-design/symbol.png', title: 'Symbol Library Development', desc: 'Tailored designs for high-power components and space-limited systems.'},
    {imgUrl: '../../../assets/system-design/schematic.png', title: 'Schematic Design & Drafting', desc: 'Our experts design circuit diagrams that capture every detail of your system. By emphasizing precision, we minimize errors and create a strong foundation for your hardware development.'},
    {imgUrl: '../../../assets/system-design/power.png', title: 'Power Sequencing & Budgeting', desc: 'Power delivery is critical. We ensure efficient, reliable power sequencing and budgeting to minimize energy loss, enhance performance, and meet the demands of complex systems.'},
    {imgUrl: '../../../assets/system-design/compliance.png', title: 'Compliance & Component Engineering', desc: 'Our designs ensure compatibility and regulatory compliance at every step. We select components that enhance the overall performance and reliability of your system.'},
    {imgUrl: '../../../assets/system-design/fpga.png', title: 'FPGA-Based Custom Design', desc: 'For unique requirements, we deliver FPGA-based solutions that offer unparalleled flexibility and high-performance functionality tailored to your specific processing needs.'},
  ];

  industryStandards:any[] = [
    {imgUrl: '../../../assets/system-design/industry-standards.png', title: 'Industry Standards', type1: 'IPC Standards', type2: 'ISO 9001', type3: 'RoHS Compliance', type4:'UL Certification'},
    {imgUrl: '../../../assets/system-design/industry-standards.png', title: 'Testing & Validation Compliance', type1: 'EMC/EMI Testing', type2: 'ESD Standards', type3: 'Thermal Reliability Testing'},
    {imgUrl: '../../../assets/system-design/industry-standards.png', title: 'Global Regulatory Compliance', type1: 'FCC Compliance', type2: 'CE Marking', type3: 'UL and CSA Standards'},
  ];

  benefits:any[] = [
    {imgUrl: '../../../assets/system-design/benefits.png', title: 'Comprehensive Expertise', desc: 'From architecture to compliance, we cover every aspect of system design under one roof.'},
    {imgUrl: '../../../assets/system-design/benefits.png', title: 'Error Minimization', desc: 'Our precision-driven approach ensures clarity, reducing the risk of costly design errors.'},
    {imgUrl: '../../../assets/system-design/benefits.png', title: 'Future-Ready Solutions', desc: 'Designs are built with scalability and adaptability in mind, keeping pace with evolving technologies.'},
    {imgUrl: '../../../assets/system-design/benefits.png', title: 'Regulatory Confidence', desc: 'With compliance engineering, you can trust that your designs meet industry standards and certifications.'}
  ];
}
