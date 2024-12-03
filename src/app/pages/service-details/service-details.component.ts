import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelingComponent } from "../modeling/modeling.component";
import { ThermalManagementComponent } from "../thermal-management/thermal-management.component";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, ModelingComponent, ThermalManagementComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent implements OnInit {
  titleSlug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the 'title' parameter from the route
    this.route.paramMap.subscribe(params => {
      this.titleSlug = decodeURIComponent(params.get('title') || '');
      document.title=this.titleSlug
    });
  }
}
