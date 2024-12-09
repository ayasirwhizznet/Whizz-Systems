import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [NgFor, RouterLink, NgClass,],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  @Input() sections: any[] = [];
  
  constructor(private router: Router) { }
  onGoToPage2(category: string | undefined,title:string | undefined) {
    if (category && title) {
      this.router.navigate(['service',category,title]);
     } 
    else {
      console.error('Route is undefined!');
    }
  }  
}
