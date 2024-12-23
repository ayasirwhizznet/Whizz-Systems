import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [NgFor, RouterLink, NgClass,],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  @Input() sections: any[] = [];
  
  constructor() { }
}