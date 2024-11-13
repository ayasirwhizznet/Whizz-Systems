import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Cbutton1Component } from '../../cbutton1/cbutton1.component';
import { Cbutton2Component } from '../../cbutton2/cbutton2.component';
import { NewsComponent } from "../../news/news.component";

@Component({
  selector: 'app-newspage',
  standalone: true,
  imports: [NgFor, Cbutton1Component, Cbutton2Component, NewsComponent],
  templateUrl: './newspage.component.html',
  styleUrl: './newspage.component.scss'
})
export class NewspageComponent {
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

  data = {
    sections: [
      {
        title: "Heatsink Type",
        items: [
          { type: "Pin Fin", description: "Dense arrangemnt of protuding pins for increased surface area and aairflow ideal for forced convection (per case studies). [14]" },
          { type: "Plate Fin", description: "Most common type with flat, parallel fins extending from a base plate. Fin shapes can vary. Suitable for natural or forced convection." },
          { type: "Stacked Fin", description: "Multiple layers of thin fins stacked together for high surface area in space-limited applications like CPUs and GPUs." }
        ]
      },
      {
        title: "Fin Geometry",
        items: [
          { type: "Straight Fins", description: "Most common design, parallel fins extending perpendiculary from the heatsink baase." },
          { type: "Extruded Fins", description: "Cost-effective way to create simple shapes by pushing aluminium through a die to form fins. " }
        ]
      }
    ]
  };
}
