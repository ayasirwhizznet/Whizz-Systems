import { Component } from '@angular/core';
import { CbuttonComponent } from '../../cbutton/cbutton.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-npi',
  standalone: true,
  imports: [CbuttonComponent, CommonModule],
  templateUrl: './npi.component.html',
  styleUrl: './npi.component.scss'
})
export class NpiComponent {

  npiTab = [
    { title: 'System Level Architecture' },
    { title: 'Engineering and Design' },
    { title: 'Prototyping' },
    { title: 'Testing' },
    { title: 'Compliance' },
  ];

  toTop(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150;
      const topPosition = element.offsetTop - offset;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }

  enggandDesign = 
    {
      title: "Engineering and Design",
      items: [
        { label: 'System Design/Schematics', link: '' },
        { label: 'FPGA Design', link: '' },
        { label: 'PCB Layout', link: '' },
        { label: '3D Modeling/Mechanical Engineering', link: '3D Modeling/Mechanical Engineering' },
        { label: 'Signal Integrity Simulation', link: '' },
        { label: 'Power Delivery Network Simulations', link: '' },
        { label: 'Thermal Management/ Thermal Simulation', link: 'Thermal Management/Thermal Simulation' },
      ]
    };

  titleSlug: string = '';
  categorySlug: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    const category = this.route.snapshot.paramMap.get('category');
    console.log(title, category);
    if (title) {
      this.titleSlug = decodeURIComponent(title);
      document.title = this.titleSlug;
    }
    if (category) {
      this.categorySlug = decodeURIComponent(category);
    }
  }

  onGoToPage2(category: string | undefined, title: string | undefined) {
    if (category && title) {
      this.router.navigate(['service', category, title]);
    }
    else {
      console.error('Route is undefined!');
    }
  }
}
