import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    // Only run this in the browser (not during SSR)
    if (typeof document !== 'undefined') {
      const loader = document.getElementById('app-loader');
      if (loader) {
        loader.style.display = 'none';
      }
    }
  })
  .catch((err) => console.error(err));
