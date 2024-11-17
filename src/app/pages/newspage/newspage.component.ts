import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Cbutton1Component } from '../../cbutton1/cbutton1.component';
import { NewsComponent } from "../../news/news.component";
import { Cbutton2Component } from '../../cbutton2/cbutton2.component';

@Component({
  selector: 'app-newspage',
  standalone: true,
  imports: [NgFor, Cbutton1Component, Cbutton2Component, NewsComponent],
  templateUrl: './newspage.component.html',
  styleUrl: './newspage.component.scss'
})
export class NewspageComponent {
  keyTakeAways = [
    {title: 'Summary Point Number One', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,e laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'},
    {title: 'Summary Point Number Two', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'},
    {title: 'Summary Point Number Three', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'},
  ];

  links = [
    {img: '../../../assets/news/whizzicon.png', imgUrl:''},
    {img: '../../../assets/news/whizz.png', imgUrl:''},
    {img: '../../../assets/news/linkedIn.png', imgUrl:''},
    {img: '../../../assets/news/youtube.png', imgUrl:''},
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
