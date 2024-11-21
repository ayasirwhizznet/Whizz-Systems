import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cbutton4Component } from "../cbutton4/cbutton4.component";

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [NgFor, RouterLink, NgClass, NgIf, Cbutton4Component],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  @Input() sections: any[] = [];
}
