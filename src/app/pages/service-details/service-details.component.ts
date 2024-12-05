import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelingComponent } from "../modeling/modeling.component";
import { ThermalManagementComponent } from "../thermal-management/thermal-management.component";
import { NpiComponent } from '../npi/npi.component';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, ModelingComponent, ThermalManagementComponent, NpiComponent],
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'] // Fixed typo to 'styleUrls'
})
export class ServiceDetailsComponent implements OnInit {
  titleSlug: string = '';
  categorySlug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Directly access params using snapshot instead of subscribing
    const title = this.route.snapshot.paramMap.get('title');
    const category = this.route.snapshot.paramMap.get('category');
    if (title) {
      this.titleSlug = decodeURIComponent(title);
      document.title = this.titleSlug; // Set document title directly here
    }
    if (category) {
      this.categorySlug = decodeURIComponent(category);
    }
  }
}
