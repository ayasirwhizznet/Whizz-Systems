import { CommonModule} from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
      description: `At Whizz Systems, we deliver end-to-end engineering and design solutions with multidomain expertise and world-class manufacturing—all in-house. Our flexible approach allows you to engage with us at any stage of product development, from concept through production and beyond. We take full ownership of the process, providing sustaining engineering support to ensure your product's performance and reliability throughout its entire lifecycle.`,
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
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
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
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
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
      description: 'With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.',
      items: [
        { label: 'Board Bring Up', link: '/services/lab_testing_solutions', fragment: "BoardBringUp"},
        { label: 'Validation', link: '/services/lab_testing_solutions', fragment: "Validation"},
        { label: 'Characterization', link: '/services/lab_testing_solutions', fragment: "Characterization"},
      ],
    },
    {
      title: "Supply Chain Management",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'Component Engineering', link: '/services/supply_chain_management', fragment: 'ComponentEngineering'},
        { label: 'Compliance Engineering', link: '/services/supply_chain_management', fragment: 'ComplianceEngineering' },
        { label: 'Procurement Engineering', link: '/services/supply_chain_management', fragment: 'ProcurementEngineering' },
      ],
    },
    {
      title: "Sustaining Engineering & Obsolescence Management",
      description: `With complete, in-house expertise, we provide flexible, customized support—whether you’re starting from a concept or refining a product for the market.`,
      items: [
        { label: 'BOM Management', link: '/404' },
        { label: 'EOL Management', link: '/404' },
        { label: 'AVL Management', link: '/404' },
        { label: 'Second Sourcing/Risk Buying', link: '/404' },
      ],
    },
  ]
}
