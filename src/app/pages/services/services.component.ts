import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Cbutton1Component } from '../../cbutton1/cbutton1.component';
import { CbuttonComponent } from "../../cbutton/cbutton.component";
import { Cbutton2Component } from '../../cbutton2/cbutton2.component';
import { NewsComponent } from '../../news/news.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, Cbutton1Component, Cbutton2Component, NewsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  
  keyTakeAways = [
    {title: 'Importance of Heat Sinks', desc: 'Heatsinks are essential for managing heat in electronic devices, preventing overheating that can lead to performance issues and damage. They facilitate effective heat transfer from hot components to cooler areas, ensuring devices operate within their safe temperature ranges.'},
    {title: 'Types and Mechanisms', desc: 'Heat Sinks are essential for managing heat in electronic devices, preventing overheating that can lead to performance issues and damage. They facilitate effective heat transfer from hot components to cooler areas, ensuring devices operate within their safe temperature ranges.'},
    {title: 'Selection Criteria', desc: 'Heat Sinks are essential for managing heat in electronic devices, preventing overheating that can lead to performance issues and damage. They facilitate effective heat transfer from hot components to cooler areas, ensuring devices operate within their safe temperature ranges.'},
  ];

  links = [
    {img: '../../../assets/services/whizzicon.png', imgUrl:''},
    {img: '../../../assets/services/whizz.png', imgUrl:''},
    {img: '../../../assets/services/linkedIn.png', imgUrl:''},
    {img: '../../../assets/services/youtube.png', imgUrl:''},
  ];
}
