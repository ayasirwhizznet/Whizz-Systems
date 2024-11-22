import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Cbutton1Component } from '../../cbutton1/cbutton1.component';
import { NewsComponent } from "../../news/news.component";
import { Cbutton3Component } from '../../cbutton3/cbutton3.component';
import { Cbutton2Component } from '../../cbutton2/cbutton2.component';

@Component({
  selector: 'app-newspage',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, Cbutton2Component, Cbutton3Component, NewsComponent],
  templateUrl: './newspage.component.html',
  styleUrl: './newspage.component.scss'
})
export class NewspageComponent {
  sectionVisibility:any = {
    signalIntegrity: true,
    power: true,
  };

  toggleVisibility(section: string) {
    this.sectionVisibility[section] = !this.sectionVisibility[section];
  }

  links = [
    { img: '../../../assets/news/whizzicon.svg', imgUrl: '' },
    { img: '../../../assets/news/whizz.svg', imgUrl: '' },
    { img: '../../../assets/news/linkedin.svg', imgUrl: '' },
    { img: '../../../assets/news/youtube.svg', imgUrl: '' },
  ];

  articlesummary = [
    { title: 'Summary Point Number One' },
    { title: 'Summary Point Number Two' },
    { title: 'Summary Point Number Three' },
    { title: 'Summary Point Number Four' },
    { title: 'Summary Point Number Five' },
    { title: 'Summary Point Number Six' },
  ];

  question1: any[] = [
    {
      title: 'What are the key factors affecting signal integrity in PCIe Gen 6, and how are they mitigated?',
      desc1: 'In PCIe Gen 6, several key factors impact signal integrity, and addressing these challenges is crucial for maintaining reliable high-speed data transmission. One significant factor is transmission line effects, where impedance mismatches, reflections, and distortion can occur. To mitigate this, meticulous PCB design practices are employed, including controlled impedance traces and proper termination techniques. Channel loss and attenuation are other factors that demand attention. Advanced equalization techniques, such as decision feedback equalization (DFE) and continuous time linear equalization (CTLE), are implemented to compensate for signal loss during transmission through PCB traces and connectors.',
      img1: '../../../assets/news/impedence.png',
      img1caption: 'Fig. 1.1',
      desc2: 'Crosstalk, the interference between adjacent traces, is a persistent challenge. Design strategies involve maintaining proper spacing between traces, using shielded connectors, and leveraging signal integrity simulations to minimize crosstalk effects. Jitter, or timing variations in signals, is also a concern. To address this, PCIe Gen 6 incorporates high-quality clocking mechanisms, low-jitter oscillators, and advanced clock data recovery (CDR) circuits to reduce timing uncertainties.',
      img2: '../../../assets/news/magnetic.png',
      img2caption: 'Fig. 1.1',
      desc3: 'Power integrity plays a crucial role in signal integrity, as power fluctuations and noise can impact the overall system. Power distribution networks, decoupling capacitors, and power management techniques are implemented to mitigate this. Connector and interconnect quality are essential, and utilizing high-quality connectors, impedance-matched interconnects, and thorough testing helps ensure reliable signal transmission.',
      desc4: 'Furthermore, advanced equalization techniques and forward error correction (FEC) are integrated into PCIe Gen 6 to address the challenges associated with higher data rates. These technologies enhance the reliability of data transmission by compensating for signal distortions and detecting/correcting errors in real time. The choice of advanced materials with low dielectric constant and low loss tangent in PCB construction is also considered to minimize signal distortion.',
      desc5: 'Additionally, advanced packaging techniques, such as micro bumping and Chip-on-Wafer-on-Substrate (CoWoS), reduce parasitic effects and enhance signal integrity. Collectively, these strategies underscore the comprehensive approach taken in PCIe Gen 6 to ensure robust signal integrity in the face of increasing data rates and performance requirements. For the most accurate and detailed information, consult the official documentation provided by the PCI-SIG.',
      img3: '../../../assets/news/error-correction.png',
      img3caption: 'Fig. 1.1',
    }
  ];
  question2: any[] = [
    {
      title: 'How do you calculate and manage signal loss and jitter in a PCIe Gen 6 system?',
      desc1: 'In a PCIe Gen 6 system, managing signal loss and jitter involves a multifaceted approach. Signal loss is addressed through careful transmission line analysis, ensuring controlled impedance traces, and establishing an insertion loss budget that considers losses in connectors, cables, and PCB traces. Advanced equalization techniques like decision feedback equalization (DFE) and continuous time linear equalization (CTLE) are implemented in receivers to compensate for signal loss and distortion.',
      desc2: 'On the other hand, jitter management requires using high-quality clock sources with low jitter, advanced clock data recovery (CDR) circuits, and implementing adaptive CDR techniques. Designers establish a jitter budget, employ simulation tools for analysis, and apply filtering and conditioning methods such as phase-locked loops (PLLs) to reduce unwanted jitter components. Real-time monitoring tools are utilized to continuously assess and adjust for system variations.',
      desc3: `Additionally, compliance testing, bit error rate (BER) testing, and eye diagram analysis play crucial roles in validating signal integrity and ensuring the system meets PCIe Gen 6 specifications. This comprehensive approach, coupled with real-world testing, contributes to robust and reliable high-speed data transmission in PCIe Gen 6 systems. Designers should refer to the PCI-SIG's official PCIe Gen 6 specifications for accurate guidelines and requirements.`,
      img1: '../../../assets/news/jitter.png',
      img1caption: 'Fig. 1.1'
    }
  ]

  question3: any[] = [
    {
      title: 'What is the role of eye diagrams and bit error rate testing in PCIe Gen 6 signal integrity validation?',
      desc1: 'In PCIe Gen 6 signal integrity validation, eye diagrams and Bit Error Rate (BER) testing are indispensable tools. Eye diagrams illustrate signal quality, portraying characteristics like jitter, noise, and timing margins. This visualization is crucial for assessing the openness of the eye within defined voltage and timing thresholds, ensuring reliable signal reception. In parallel, BER testing involves comparing transmitted and received bit sequences, quantifying the accuracy of data transmission. Low BER values indicate a high level of signal integrity and system reliability.',
      desc2: `These tools are integrated, with information from eye diagrams guiding the understanding of factors contributing to observed bit errors during BER testing. Together, they provide a comprehensive evaluation of signal quality and aid in the optimization of PCIe Gen 6 systems for high-speed data transmission, meeting stringent performance requirements. Regular testing and analysis using these tools contribute to the development of robust and reliable PCIe Gen 6 communication links.`,
      img1: '../../../assets/news/bit-error.png',
      img1caption: 'Fig. 1.1'
    }
  ]

  question4: any[] = [
    {
      title: 'What challenges arise in managing power distribution in PCIe Gen 6 compared to earlier versions?',
      desc1: 'Managing power distribution in PCIe Gen 6 presents several challenges compared to earlier versions. One notable challenge is the potential increase in power demands as a consequence of higher data rates and enhanced performance capabilities inherent in PCIe Gen 6 components like advanced processors and accelerators. This necessitates careful consideration of power management strategies to ensure optimal system stability and performance. Dynamic power delivery becomes crucial to accommodate varying workloads efficiently, and staying within reduced power budgets due to thermal constraints and energy efficiency considerations poses another challenge.',
      desc2: 'Additionally, with the higher frequencies associated with PCIe Gen 6, maintaining power integrity becomes more complex, requiring robust power distribution networks to handle increased frequencies without introducing noise or voltage fluctuations. Voltage regulation and noise control mechanisms must be advanced to address the performance demands while minimizing voltage variations. Electromagnetic interference (EMI) becomes more pronounced at higher data rates, emphasizing the need for effective EMI mitigation strategies to comply with electromagnetic compatibility (EMC) standards. Achieving high power efficiency remains a constant challenge, requiring innovations in power delivery architectures, voltage regulation, and component efficiency.',
      desc3: 'Moreover, the adoption of advanced packaging techniques, like Chip-on-Wafer-on-Substrate (CoWoS) or 2.5D/3D integration, introduces new complexities in power distribution, necessitating innovative solutions. Designers must stay informed about official specifications and guidelines provided by the PCI-SIG for PCIe Gen 6 to address these challenges effectively and ensure optimal power distribution in high-speed serial communication systems.'
    }
  ];

  question5:any[] = [
    {
      title: 'What techniques can be employed to minimize voltage droops and ensure stable power delivery in PCIe Gen 6 systems?',
      desc1: 'Ensuring stable power delivery in PCIe Gen 6 systems requires a multifaceted approach, employing various techniques to minimize voltage droops. Dynamic Voltage and Frequency Scaling (DVFS) allows for adaptive adjustments to voltage and frequency based on workload demands, optimizing power consumption and mitigating voltage droops during varying workloads. Advanced voltage regulators with fast response times and tight voltage regulation characteristics are instrumental in swiftly adjusting output voltage to minimize droops. Strategic placement of decoupling capacitors across the PCB acts as a buffer, absorbing transient currents and stabilizing voltage levels. Power gating techniques selectively disable power to inactive components, reducing overall power consumption and minimizing droops. Active power management involves real-time monitoring and control of power consumption, making dynamic adjustments to voltage levels.',
      desc2: `Predictive voltage scaling algorithms anticipate workload changes, proactively adjusting the voltage to prevent droops. Transient voltage suppressors and low-ESR capacitors protect against spikes and enhance the system's ability to maintain stable voltage levels. Optimizing power plane design on the PCB reduces impedance and inductance, enhancing the power distribution network's responsiveness. Fast-response voltage regulators and thorough simulation and analysis using dedicated tools help identify and address potential droop issues in the power delivery network. Implementing these techniques collectively ensures a stable power supply, meeting the demanding requirements of PCIe Gen 6 systems and contributing to reliable high-speed data transmission. Designers should refer to the PCI-SIG's official PCIe Gen 6 specifications for precise guidelines and considerations.`,
      img1: '../../../assets/news/voltage-drop.png',
      img1caption: 'Fig. 1.1'
    }
  ];
}
