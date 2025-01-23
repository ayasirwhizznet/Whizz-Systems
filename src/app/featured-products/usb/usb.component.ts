import { Component } from '@angular/core';
import { ServicesHeroComponent } from '../../components/services-hero/services-hero.component';
import { ServicesIntroComponent } from '../../components/services-intro/services-intro.component';

@Component({
  selector: 'app-usb',
  standalone: true,
  imports: [ServicesHeroComponent, ServicesIntroComponent],
  templateUrl: './usb.component.html',
  styleUrl: './usb.component.scss'
})
export class UsbComponent {

}
