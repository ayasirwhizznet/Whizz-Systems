import { Component, OnInit, Renderer2 } from '@angular/core';
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
export class NpiComponent implements OnInit {
  
  npiTab = [
    { title: 'System Level Architecture' },
    { title: 'Engineering and Design' },
    { title: 'Prototyping' },
    { title: 'Testing' },
    { title: 'Compliance' },
  ];

  toTop(id: string) {
    const element = document.getElementById(id?.replaceAll(/\s/g,''));
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

  constructor(private route: ActivatedRoute, private router: Router,private renderer: Renderer2) { }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    const category = this.route.snapshot.paramMap.get('category');
    if (title) {
      this.titleSlug = decodeURIComponent(title);
      document.title = this.titleSlug;
     if(category === 'NPI'){
      console.log(this.titleSlug.replaceAll(/\s/g,''));
      setTimeout(() => {
        const element = this.renderer.selectRootElement(`#${`${title}`?.replaceAll(/\s/g,'')}`, true);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      
     }
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
