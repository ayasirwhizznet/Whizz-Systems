import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ServicesBenefitsComponent } from '@components/services-benefits/services-benefits.component';
import { ServicesContactExpertsComponent } from '@components/services-contact-experts/services-contact-experts.component';
import { ServicesCoreServicesComponent } from '@components/services-core-services/services-core-services.component';
import { ServicesHeroComponent } from '@components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '@components/services-intro/services-intro.component';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-adv-manufacturing',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesIntroComponent,
    ServicesBenefitsComponent,
    ServicesCoreServicesComponent,
    ServicesContactExpertsComponent,
  ],
  templateUrl: './adv-manufacturing.component.html',
})
export class AdvManufacturingComponent {

  services: string[] = ['Process Engineering', 'Manufacturing Testing','Locations', 'Environmental Testing', 'Fix Spacing', 'Box Build'];
    
  processess: any[] = [
    {
      imgUrl: 'assets/icons/excellence.svg',
      name: 'Custom Fixtures and Stencils',
      desc: 'To boost yield from the first proto run, we create custom fixtures that support press-fit, POP, through-hole, and mixed-assembly components—even for high-layer-count boards or designs using 8–10 oz copper planes. We also design our stencils in order to optimize solder paste usage and reduce error for excess solder paste.',
    },
    {
      imgUrl: 'assets/icons/optimize.svg',
      name: 'Solder Paste Optimization',
      desc: 'We calibrate the solder chemistry, thermal oven profiles, and dispense volumes for each board. Our knowledge is based on 25+ years of building some of the industry’s most complex products—both client-designed and internally developed.',
    },
    {
      imgUrl: 'assets/icons/thermal.svg',
      name: 'Thermal Profiling & Build Plan Validation',
      desc: 'Whether your board has tight form factors or heavy copper planes, our thermal profiles are customized for heat distribution and solder integrity. We validate every prototype 100%, so issues are caught before volume runs begin.',
    },
  ];

  facilities: any[] = [
    {
      title: 'Fast Turns and NPI Agility',
      address: 'USA Facility',
      intro:
        'Located in the heart of Silicon Valley, our facility is optimized for quick-turn NPI and pilot builds.',
      desc: [
        '<b>High equipment availability by design:</b> Low utilization ensures capacity for urgent programs.',
        '<b>Built for responsiveness:</b> We run one shift with the option to expand to a second.',
        'Ideal for early-stage startups and programs needing U.S.-based production for IP or compliance.',
      ],
    },
    {
      title: 'High-Volume, High-Quality Production',
      address: 'Malaysia Facility',
      intro:
        'Established in 2008, our Malaysia facility is wholly owned and operated by Whizz Systems.',
      desc: [
        '80,000 sq. ft. state-of-the-art plant',
        'Equipped with high-speed Fuji lines for production-grade builds',
        'Room for growth: physical space and staffing flexibility with only one shift currently active',
        'Seamless internal transfer from our U.S. site with full engineering support—no burden on customers',
      ],
    },
  ];

  coreServices: any[] = [
    {
      imgUrl:
        'assets/services/advanced-manufacturing/adv/temp-cycling-testing.png',
      name: 'Temperature Cycling & Burn-In Testing',
      desc: 'We begin by running temperature cycling programs in-house using our state-of-the-art environmental chambers. Boards are subjected to cycles of extreme high and low temperatures to evaluate performance degradation, determine failure points, and ensure continued functionality under fluctuating thermal conditions. Burn-in testing is also offered to simulate prolonged operation, often up to 24 hours or longer, as requested by the customer. These cycles help verify whether a design can sustain its electrical and mechanical performance under stress.',
    },
    {
      imgUrl:
        'assets/services/advanced-manufacturing/adv/validation-testing.png',
      name: 'Vibration & Shock Testing',
      desc: 'For vibration and shock testing, we partner with certified independent labs that specialize in MIL-STD and industrial-grade standards. Boards are tested under mechanical stress to replicate conditions such as shipping, installation, or use in rugged environments. This phase helps identify weaknesses in component mounting, solder joints, and board structure to ensure resilience and mechanical reliability.',
    },
    {
      imgUrl: 'assets/services/advanced-manufacturing/adv/drop-testing.png',
      name: 'Drop Testing',
      desc: 'Drop testing is performed to determine the impact threshold of the product when subjected to sudden mechanical shocks. Boards are dropped from specified heights to simulate real-world handling scenarios, such as shipping accidents or field mishandling. The results help assess structural integrity and verify whether enclosures and assemblies can withstand these events without failure.',
    },
  ];

  benefits: any[] = [
    {
      imgUrl: 'assets/icons/material-selection.svg',
      name: 'Material Selection',
      desc: 'We use the right grade of foam, custom inserts, and protective layers to avoid damage and static discharge.',
    },
    {
      imgUrl: 'assets/icons/kit.svg',
      name: 'Kit Consolidation',
      desc: 'Every component, accessory, and marketing material is accounted for in a detailed kit supply list.',
    },
    {
      imgUrl: 'assets/icons/brand.svg',
      name: 'Brand & Presentation',
      desc: 'For customer-facing deliveries, we also integrate marketing and presentation materials as required.',
    },
    {
      imgUrl: 'assets/icons/logistics.svg',
      name: 'Logistics Optimization',
      desc: 'We design for both internal distribution and final shipment from our facilities to customer or end-user destinations.',
    },
  ];

  enclosureSolutions: any[] = [
    'Board-level mechanical builds.',
    'Multi-board integration into chassis or server racks.',
    'System-level assembly with thermal, structural, and cable management in mind.',
  ];

  capabilities: any[] = [
    'Precision Assembly Tools: We use automated and calibrated tools to maintain high mechanical build accuracy and repeatability.',
    'Material Flexibility: Our team works with aluminum, plastics, metals, and even custom materials like wood where needed.',
    'Cable Management: We manufacture custom cables in-house and partner with trusted suppliers for complex assemblies. We manage routing, strain relief, and airflow optimization within each build.',
    'Cooling Solutions Integration: Our mechanical team ensures that cooling systems—fans, heat sinks, airflow ducts—are properly mounted and optimized for system reliability.',
  ];

  testing: any[] = [
    [
      {
        img: 'assets/services/advanced-manufacturing/adv/kit-validation.png',
        title: 'Kit Validation & First Article Build',
        desc: 'Before a single component is placed, our team validates the entire kit against the build documentation and CAD files. We confirm that every part is present, correctly specified, and ready for accurate placement. Once validated, we begin with a First Article build—a time-intensive process where a single board is built and thoroughly inspected before proceeding to the rest of the batch.',
      },
      {
        img: 'assets/services/advanced-manufacturing/adv/spi.png',
        title: 'Solder Paste Inspection (SPI)',
        desc: 'Before components are even placed, our SPI process verifies the volume, alignment, and shape of solder paste deposits to prevent cold joints or bridging errors downstream.',
      },
    ],
    [
      {
        img: 'assets/services/advanced-manufacturing/adv/inspection.png',
        title: 'First Article Inspection',
        desc: `Once the First Article is complete, it undergoes a manual inspection by our QC team using detailed board documentation and assembly drawings. Every component is verified for:
<ul class="list-disc list-outside ml-4"><li>Correct value</li>
<li>Proper location</li>
<li>Accurate orientation (to prevent polarity errors or misalignment)</li></ul>
This manual step complements our automated systems and adds a human layer of quality control that is often missing in traditional builds.`,
      },
      {
        img: 'assets/services/advanced-manufacturing/adv/mechanical.png',
        title: 'Mechanical Operations with Precision Control',
        desc: 'For assemblies that require mechanical integration—such as brackets, custom mounts, or sockets—we predefine the correct torque values and installation steps. These second ops are executed with the same precision as our SMT processes.',
      },
    ],
    [
      {
        img: 'assets/services/advanced-manufacturing/adv/automated.png',
        title: 'Automated Optical Inspection (AOI)',
        desc: `After pick-and-place and oven reflow, boards pass through our upgraded, world-class AOI machines. These machines analyze the entire assembly to verify:
<ul class="list-disc list-outside ml-4""><li>Correct component placement</li>
<li>Solder joint integrity</li>
<li>Misalignments or missing parts</li>
<li>3D inspection of component</li></ul>
Only after passing AOI does the batch proceed to the rest of the build, even if it's just 5 or 10 units.
`,
      },
      {
        img: 'assets/services/advanced-manufacturing/adv/x-ray.png',
        title: 'X-Ray Inspection for Deep Verification',
        desc: `The final layer of quality control is X-ray inspection using our state-of-the-art machines. This allows us to:
Inspect solder joints under BGAs and other hidden components
Detect shorts or opens between vias and pads
Analyze solder voids and joint integrity across multiple layers
3D images of solder joints`,
      },
    ],
  ];

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

  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  private currentFragment: string | null = null;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.currentFragment = fragment;
        this.scrollToService(fragment);
      }
    });

    this.navigationSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment && fragment !== this.currentFragment) {
          this.currentFragment = fragment;
          this.scrollToService(fragment);
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

  scrollToService(fragment: string, attempt: number = 0): void {
  const maxAttempts = 10;
  const delay = 100;

  setTimeout(() => {
    const element = document.getElementById(fragment?.replace(/\s/g, ''));
    if (element) {
      const offsetPercentage = 10;
      const offset = (window.innerHeight * offsetPercentage) / 100;
      const topPosition = element.offsetTop - offset;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    } else if (attempt < maxAttempts) {
      this.scrollToService(fragment, attempt + 1);
    }
  }, delay);
}

}
