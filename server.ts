import 'zone.js/node';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './src/app/app.component';
import { appConfig } from './src/app/app.config';

export default function (): Promise<unknown> {
  return bootstrapApplication(AppComponent, appConfig);
}
