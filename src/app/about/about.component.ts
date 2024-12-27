import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbuttonComponent } from '../components/cbutton/cbutton.component';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CbuttonComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  private chart!: am4maps.MapChart;
  private markers: HTMLDivElement[] = [];

  ngOnInit(): void {
    // Create map instance
    this.chart = am4core.create('chartdiv', am4maps.MapChart);

    // Set map definition
    this.chart.geodata = am4geodata_worldLow;

    // Set projection
    this.chart.projection = new am4maps.projections.Miller();

    // Disable zoom control by setting zoomControl to null
    // this.chart.zoomControl = null;

    // Set a fixed zoom level to prevent zooming in/out
    this.chart.zoomLevel = -1; // Set this to the desired zoom level

    // Create map polygon series
    const polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.fill = am4core.color('#fff');

    // Exclude Antarctica
    polygonSeries.exclude = ['AQ'];

    // Remove the AmCharts logo
    this.chart.logo.disabled = true;
    // Create image series for custom markers
    const imageSeries = this.chart.series.push(new am4maps.MapImageSeries());

    // Add data for markers
    imageSeries.data = [
      {
        latitude: 37.3541,
        longitude: -121.9552,
        title: 'Santa Clara, California',
        content: 'This is Santa Clara, California.',
      },
      {
        latitude: 5.42467,
        longitude: 100.5974,
        title: 'Kulim, Malaysia',
        content: 'This is Kulim, Malaysia.',
      },
    ];

    // Create custom markers after the chart is ready
    this.chart.events.on('ready', () => {
      const svgContainer = this.chart.svgContainer;
      if (svgContainer && svgContainer.htmlElement) {
        imageSeries.data.forEach((dataItem, index) => {
          const marker = document.createElement('div');
          marker.style.position = 'absolute';
          marker.style.width = '17px';
          marker.style.height = '17px';
          marker.style.borderRadius = '50%';
          marker.style.border = '4px solid #2C353A';
          marker.style.transform = 'translate(-50%, -50%)';

          // Different HTML for each location
          if (dataItem.title === 'Santa Clara, California') {
            marker.innerHTML = `<div>
              <div style="width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-bottom: 24px solid #2A494C; position: relative; right:7px; top: 3px;"></div>
              <div style="width: 270px; height: 355px; background-color: #2A494C; color: #fff; position: relative; right: 130px; border-radius: 8px; padding: 16px; text-align: center; font-family: Roboto, serif;">
              <h4 style="font-weight: 500; margin-bottom: 16px;">Santa Clara, CA, USA</h4>
              <hr style="bordr-color: #D9D9D9">
              <p style="font-weight: 300; margin-block: 16px">35,000 Square Foot Facility</p>
              <hr style="bordr-color: #D9D9D9">
              <p style="font-weight: 300; margin-block: 16px">95 Employees</p>
              <hr style="bordr-color: #D9D9D9">
              <p style="font-weight: 300; margin-block: 16px">SPI, FP, AOI, X-RAY</p>
              <hr style="bordr-color: #D9D9D9">
              <p style="font-weight: 300; margin-block: 16px">4 Juki SMT Lines</p>
              <hr style="bordr-color: #D9D9D9">
              <p style="font-weight: 300; margin-block: 16px">QMS, ITAR</p>
              <hr style="bordr-color: #D9D9D9">
              </div>
            </div>`;
          } else if (dataItem.title === 'Kulim, Malaysia') {
            marker.innerHTML = `<div>
            <div style="width: 0; height: 0; border-left: 12px solid transparent; border-right: 12px solid transparent; border-top: 24px solid #2A494C; position: relative; right:7px; bottom: 17px;"></div>
            <div style="position: relative; bottom: 395px; width: 270px; height: 355px; background-color: #2A494C; color: #fff; position: relative; right: 130px; border-radius: 8px; padding: 16px; text-align: center; font-family: Roboto, serif;">
            <h4 style="font-weight: 500; margin-bottom: 16px;">Malaysia</h4>
            <hr style="bordr-color: #D9D9D9">
            <p style="font-weight: 300; margin-block: 16px">80,000 Square Foot Facility</p>
            <hr style="bordr-color: #D9D9D9">
            <p style="font-weight: 300; margin-block: 16px">100 Employees</p>
            <hr style="bordr-color: #D9D9D9">
            <p style="font-weight: 300; margin-block: 16px">SPI, FP, AOI, X-RAY</p>
            <hr style="bordr-color: #D9D9D9">
            <p style="font-weight: 300; margin-block: 16px">4 Juki SMT Lines</p>
            <hr style="bordr-color: #D9D9D9">
            <p style="font-weight: 300; margin-block: 16px">QMS</p>
            <hr style="bordr-color: #D9D9D9">
            </div>
          </div>`;
          }

          // Append the marker to the map container
          svgContainer.htmlElement.appendChild(marker);
          this.markers.push(marker);

          // Update initial marker position
          this.updateMarkerPosition(dataItem, marker);
        });

        // Add events for dynamic marker positioning
        this.chart.events.on('mappositionchanged', () => {
          this.updateAllMarkerPositions(imageSeries.data);
        });
        this.chart.events.on('zoomlevelchanged', () => {
          this.updateAllMarkerPositions(imageSeries.data);
        });
      } else {
        console.error('SVG container or HTML element is not available.');
      }
    });
  }

  ngOnDestroy(): void {
    // Dispose of the chart when the component is destroyed
    if (this.chart) {
      this.chart.dispose();
    }
  }

  private updateMarkerPosition(dataItem: any, marker: HTMLDivElement): void {
    const geoPoint = this.chart.projection.convert({
      latitude: dataItem.latitude,
      longitude: dataItem.longitude,
    });

    if (geoPoint && this.chart.svgContainer?.htmlElement) {
      const svgBoundingRect = this.chart.svgContainer.htmlElement.getBoundingClientRect();
      marker.style.left = `${geoPoint.x + svgBoundingRect.left}px`;
      marker.style.top = `${geoPoint.y + svgBoundingRect.top}px`;
    } else {
      console.error('GeoPoint conversion failed for:', dataItem);
    }
  }

  private updateAllMarkerPositions(data: any[]): void {
    data.forEach((dataItem, index) => {
      this.updateMarkerPosition(dataItem, this.markers[index]);
    });
  }

  // Data arrays for experience, certifications, etc. remain unchanged
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

  services = [
    '',
    'Product Development',
    'Prototyping',
    'NPI/Pilot',
    'Production',
    'Testing',
    'Services & Repair',
  ];

  santaClara = [
    'Santa Clara',
    '<i class="fa-regular fa-circle-check"></i>',
    '<i class="fa-regular fa-circle-check"></i>',
    '<i class="fa-regular fa-circle-check"></i>',
    '<i class="fa-regular fa-circle-check"></i>',
    '<i class="fa-regular fa-circle-check"></i>',
    '<i class="fa-regular fa-circle-check"></i>',
  ];

  malaysia = [
    'Malaysia',
    '',
    '',
    '',
    '<i class="fa-regular fa-circle-check"></i>',
    '<i class="fa-regular fa-circle-check"></i>',
    '<i class="fa-regular fa-circle-check"></i>',
  ];
}
