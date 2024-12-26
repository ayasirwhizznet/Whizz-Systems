import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'keen-slider/keen-slider.min.css';
import {registerLicense} from '@syncfusion/ej2-base';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF5cXmBCf0x3WmFZfVtgcV9CaVZSQmY/P1ZhSXxXd0dhXH5ZdH1WQGZYV0E=")
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
