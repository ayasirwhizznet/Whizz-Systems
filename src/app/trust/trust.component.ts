import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust.component.html',
  styleUrl: './trust.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrustComponent {
  companies = [
    '../../assets/trust/altera.png',
    '../../assets/trust/amd.png',
    '../../assets/trust/nvidia.png',
    '../../assets/trust/amazon.png',
    '../../assets/trust/microsoft.png',
    '../../assets/trust/keysight.png',
    '../../assets/trust/google.png',
  ];
}
