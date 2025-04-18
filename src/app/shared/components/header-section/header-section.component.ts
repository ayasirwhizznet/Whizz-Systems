import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-section.component.html',
})
export class HeaderSectionComponent {
  @Input() sections: any[] = [];
}
