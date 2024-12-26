import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbuttonComponent } from '../components/cbutton/cbutton.component';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import * as am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';

interface MapPointData {
  geometry: { type: string; coordinates: [number, number] };
  title: string;
  html: string; // Explicitly define the `html` property
}


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CbuttonComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})

export class AboutComponent {
  private root!: am5.Root;

  ngAfterViewInit() {
    // Create root element
    this.root = am5.Root.new('chartdiv');

    // Set themes
    this.root.setThemes([
      am5.Theme.new(this.root)
    ]);

    // Create map chart
    const chart = this.root.container.children.push(
      am5map.MapChart.new(this.root, {
        panX: "rotateX",
        panY: "rotateY",
        wheelY: "zoom",
        projection: am5map.geoNaturalEarth1(),
      })
    );

    // Create polygon series for the world map
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow.default,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xffffff), // Set base color (e.g., green)
      tooltipText: "{name}",
      interactive: true,
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xD9D9D9),
    });

    // Add point series for markers
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(this.root, {})
    );

    pointSeries.bullets.push((root, dataItem) => {
      // Retrieve custom data from the `data` property of `dataItem`
      const customData = dataItem.data as { title?: string; html?: string };
    
      console.log("Custom Data:", customData); // Debugging log
    
      // Use custom HTML if provided, otherwise fallback to a default
      const customHtml = customData?.html || `<div class="custom-marker" title="{title}">
               <div style="width: 17px; height: 17px; border-radius: 50%; border: 4px solid #2C353A"></div>
                <div style="width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-bottom: 24px solid #2A494C; position: relative; top:-10px; right: 3px"></div>
             </div>`;
    
      return am5.Bullet.new(root, {
        sprite: am5.Container.new(root, {
          html: customHtml,
          width: am5.percent(100),
          height: am5.percent(100),
          tooltipText: customData?.title || "No Title",
          centerX: am5.percent(50),
          centerY: am5.percent(50),
        }),
      });
    });
    

    // Add data for specific locations
    pointSeries.data.setAll([
      {
        geometry: { type: "Point", coordinates: [-121.9552, 37.3541] },
        title: "3240 Scott Blvd, Santa Clara, CA 95054, United States",
        html: `<div class="custom-marker" title="{title}">
               <div style="width: 17px; height: 17px; border-radius: 50%; border: 4px solid #2C353A"></div>
                <div style="width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-bottom: 24px solid #2A494C; position: relative; top:-10px; right: 3px"></div>
             </div>`,
      },
      {
        geometry: { type: "Point", coordinates: [100.5974, 5.42467] }, // New York (lon, lat)
        title: `Lot 8, SMI Park Phase 2 Jalan Hi-Tech 4 Sambungan Kulim Hi-Tech Park 09000 Kulim, KEDHA Malaysia`,
        html: `<div class="custom-marker" title="{title}">
               <div style="width: 17px; height: 17px; border-radius: 50%; border: 4px solid #2C353A"></div>
                <div style="width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-bottom: 24px solid #2A494C; position: relative; top:-10px; right: 3px"></div>
             </div>`,
      },
    ]);
    console.log(pointSeries.data.values)

    // Zoom to fit the map
    chart.appear(1000, 100);
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }
  
  experience = [
    { quantity: '10', sign: '+', title: 'industries served', desc: 'Automotive, medical, aerospace, consumer electronics, and more' },
    { quantity: '10K', sign: '+', title: 'projects completed', desc: 'Trusted globally for delivering complex solutions' },
    { quantity: '140', sign: '+', title: 'experts', desc: `A skilled team driving innovation and excellence` },
    { quantity: '450', sign: '+', title: 'customers worldwide', desc: 'Supporting a diverse client base of industry leaders' },
  ];

  certifications = [
    { imgUrl: '../../assets/about/image3.png', name: 'ITAR' },
    { imgUrl: '../../assets/about/image4.png', name: 'ISO 9001: 2015 RevD' },
    { imgUrl: '../../assets/about/image2.png', name: 'ISO 13485:2016' },
    { imgUrl: '../../assets/about/image5.png', name: 'ISO-27001' },
    { imgUrl: '../../assets/about/image1.png', name: 'ISO-14001' },
  ];

  concisely = [
    { imgUrl: '../../assets/about/img1.png', title: 'Everything under one roof', desc: 'Feasibility studies, design, prototyping, manufacturing, and compliance.' },
    { imgUrl: '../../assets/about/img2.png', title: 'Flexible & scalable', desc: 'Whether you need a partner for the entire journey or just one part, we are adaptable.' },
    { imgUrl: '../../assets/about/img3.png', title: 'Global teams', desc: 'Our worldwide teams work in unison to accelerate execution with 24/7 collaboration.' },
    { imgUrl: '../../assets/about/img4.png', title: 'Seamless process', desc: 'Streamlined processes across design, testing, manufacturing, and post-delivery support.' },
  ];

  collaborations = [
    '../../assets/about/altera.png',
    '../../assets/about/amd.png',
    '../../assets/about/nvidia.png',
    '../../assets/about/amazon.png',
    '../../assets/about/microsoft.png',
    '../../assets/about/keysight.png',
    '../../assets/about/google.png',
    '../../assets/about/advantest.png',
    '../../assets/about/paypal.png',
    '../../assets/about/broadcom.png',
  ];

  passionate = [
    { imgUrl: '../../assets/about/Manny-Karim.png', name: 'Manny Karim', designation: 'CEO', desc: 'Manny’s expertise in operations, finance, and manufacturing has been instrumental in Whizz Systems’ success. Starting his career at Pentagon Systems in 1989, Manny co-founded Whizz Systems and developed a robust team and processes ensuring maximum efficiency without compromising quality. He oversees 4 state-of-the-art assembly lines in Santa Clara and 2 facilities in Malaysia.' },
    { imgUrl: '../../assets/about/Muuhammad-Irfan.png', name: 'Muhammad Irfan', designation: 'President', desc: `With a background in product development and manufacturing services, Muhammad co-founded Whizz Systems in 1999. His leadership has driven Whizz Systems' global presence across 3 continents, serving industries like computing, networking, medical, and defense.` },
  ];
}