import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ServicesHeroComponent } from '../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../components/services-intro/services-intro.component';
import { ServicesCaseStudyComponent } from '../../components/services-case-study/services-case-study.component';
@Component({
  selector: 'app-npi',
  standalone: true,
  imports: [CommonModule, RouterLink, ServicesHeroComponent, ServicesIntroComponent, ServicesCaseStudyComponent],
  templateUrl: './npi.component.html',
  styleUrl: './npi.component.scss'
})
export class NpiComponent implements OnInit, OnDestroy {

  npiTab = [
    { title: 'System Level Architecture' },
    { title: 'Engineering & Design' },
    { title: 'Prototyping' },
    { title: 'Testing' },
    { title: 'Compliance' },
  ];

  enggandDesign =
    {
      title: "Engineering and Design",
     items: [
        { label: 'System Design/Schematics', link: '/services/engineering_&_design/system_design_&_schematics' },
        { label: 'FPGA Design', link: '/services/engineering_&_design/fpga' },
        { label: 'PCB Layout', link: '/services/engineering_&_design/pcb_layout' },
        { label: '3D Modeling/Mechanical Engineering', link: '/services/engineering_&_design/3D_modeling' },
        { label: 'Signal Integrity Simulations', link: '/services/engineering_&_design/signal_integrity_simulations' },
        { label: 'Power Delivery Network Simulations', link: '/services/engineering_&_design/power_delivery' },
        { label: 'Thermal Management/Thermal Simulation', link: '/services/engineering_&_design/thermal_management' },
      ],
    };

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

  scrollToFragment(fragment: string): void {
    setTimeout(() => {
      const element = document.getElementById(fragment?.replace(/\s/g, ''));
      if (element) {
        const viewportHeight = window.innerHeight;
        const offsetPercentage = 30;
        const offset = (window.innerHeight * offsetPercentage) / 100;
        const topPosition = element.offsetTop - offset;
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });
      }
    }, 1);
  }
}