import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelingComponent } from "../modeling/modeling.component";
import { ThermalManagementComponent } from "../thermal-management/thermal-management.component";
import { NpiComponent } from '../npi/npi.component';
import { SystemDesignComponent } from "../system-design/system-design.component";
import { SignalIntegrityComponent } from "../signal-integrity/signal-integrity.component";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, ModelingComponent, ThermalManagementComponent, NpiComponent, SystemDesignComponent, SignalIntegrityComponent],
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  titleSlug: string = '';
  categorySlug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe(params => {
      const title = params.get('title');
      const category = params.get('category');

      if (title) {
        this.titleSlug = decodeURIComponent(title);
        document.title = this.titleSlug; 
      }

      if (category) {
        this.categorySlug = decodeURIComponent(category);
      }

     
    });
  }

 
}
