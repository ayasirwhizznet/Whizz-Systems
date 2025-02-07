import { CommonModule} from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CbuttonComponent } from "../components/cbutton/cbutton.component";
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, CbuttonComponent],
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit, OnDestroy{

  private fragmentSubscription!: Subscription;
    private navigationSubscription!: Subscription;
    private currentFragment: string | null = null;
    constructor(private route: ActivatedRoute, private router: Router) { }
    ngOnInit(): void {
      this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
        if (fragment) {
          this.currentFragment = fragment;
          this.scrollToFragment(fragment);
        }
      });
  
      this.navigationSubscription = this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          const fragment = this.route.snapshot.fragment;
          if (fragment && fragment !== this.currentFragment) {
            this.currentFragment = fragment;
            this.scrollToFragment(fragment);
          }
        });
    }
  
    ngOnDestroy(): void {
      if (this.fragmentSubscription) {
        this.fragmentSubscription.unsubscribe();
      }
      if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
      }
    }
    
  isSticky: boolean = true;
  lastScrollTop: number = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollY;

    if (currentScroll > this.lastScrollTop) {
      this.isSticky = false;
    } else {
      this.isSticky = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

    scrollToFragment(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const viewportHeight = window.innerHeight;
      const offsetPercentage = 35;
      const offset = (viewportHeight * offsetPercentage) / 100;
      const topPosition = element.offsetTop - offset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }
  
  servicesTab: any = [
    {
      title: "Engineering & Design",
      description: `With all engineering disciplines in-house—hardware, mechanical, thermal, and power—we deeply understand the complexity and requirements of modern electronics. From concept to production, we design high-performance, manufacturable solutions that meet the toughest industry challenges.`,
      items: [
        { label: 'System Design/Schematics', link: '/services/engineering_&_design/system_design_&_schematics' },
        { label: 'FPGA Design', link: '/services/engineering_&_design/fpga' },
        { label: 'PCB Layout', link: '/services/engineering_&_design/pcb_layout' },
        { label: '3D Modeling/Mechanical Engineering', link: '/services/engineering_&_design/3D_modeling' },
        { label: 'Signal Integrity Simulations', link: '/services/engineering_&_design/signal_integrity_simulations' },
        { label: 'Power Delivery Network Simulations', link: '/services/engineering_&_design/power_delivery' },
        { label: 'Thermal Management/Thermal Simulation', link: '/services/engineering_&_design/thermal_management' },
      ]
    },

    {
      title: "NPI",
      description: `Bringing innovative hardware to market requires precision, efficiency, and deep technical expertise. We bridge the gap between concept and production with a seamless NPI process, ensuring design readiness, manufacturability, and compliance while accelerating time to market.`,
      items: [
        { label: 'System Level Architecture', link: '/services/npi', fragment: "SystemLevelArchitecture" },
        { label: 'Engineering & Design', link: '/services/npi', fragment: "Engineering&Design"  },
        { label: 'Prototyping', link: '/services/npi', fragment: "Prototyping"  },
        { label: 'Testing', link: '/services/npi', fragment: "Testing"  },
        { label: 'Compliance and Certification', link: '/services/npi', fragment: "Compliance"  },
      ],
    },
    {
      title: "Advanced Manufacturing",
      description: `Precision, scalability, and efficiency drive our advanced manufacturing capabilities. Whether assembling complex electronics, integrating mechanical enclosures, or designing system-level packaging, we ensure the highest quality while offering both local and offshore production flexibility.`,
      items: [
        { label: 'Manufacturing Simulations', link: '/services/advanced_manufacturing' },
        { label: 'Electronic Manufacturing Assembly', link: '/services/advanced_manufacturing' },
        { label: 'Mechanical Assembly', link: '/services/advanced_manufacturing' },
        { label: 'System Build & Packaging Design', link: '/services/advanced_manufacturing' },
        { label: 'Local & Offshore Capabilities', link: '/services/advanced_manufacturing' },
      ],
    },
    {
      title: 'Lab Testing Solutions',
      description: 'Reliability starts with rigorous validation. Our lab testing solutions ensure every board and system meets industry standards, from initial bring-up to full characterization, so your products perform flawlessly in real-world conditions.',
      items: [
        { label: 'Board Bring Up', link: '/services/lab_testing_solutions', fragment: "BoardBringUp"},
        { label: 'Validation', link: '/services/lab_testing_solutions', fragment: "Validation"},
        { label: 'Characterization', link: '/services/lab_testing_solutions', fragment: "Characterization"},
      ],
    },
    {
      title: "Supply Chain Management",
      description: `Managing electronic components is more complex than ever. Our supply chain solutions provide strategic sourcing, compliance oversight, and procurement expertise to mitigate risk, ensure availability, and keep your production on track.`,
      items: [
        { label: 'Component Engineering', link: '/services/supply_chain_management', fragment: 'ComponentEngineering'},
        { label: 'Compliance Engineering', link: '/services/supply_chain_management', fragment: 'ComplianceEngineering' },
        { label: 'Procurement Engineering', link: '/services/supply_chain_management', fragment: 'ProcurementEngineering' },
      ],
    },
    {
      title: "Sustaining Engineering & Obsolescence Management",
      description: `Technology evolves, but your product lifecycle doesn’t have to be a limitation. We proactively manage component lifecycles, mitigate EOL risks, and provide alternative sourcing strategies to keep your products viable and competitive.`,
      items: [
        { label: 'BOM Management', link: '/404' },
        { label: 'EOL Management', link: '/404' },
        { label: 'AVL Management', link: '/404' },
        { label: 'Second Sourcing/Risk Buying', link: '/404' },
      ],
    },
  ]
}
