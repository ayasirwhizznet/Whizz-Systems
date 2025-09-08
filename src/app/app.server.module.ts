// src/app/app.server.module.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

@NgModule({
  imports: [ServerModule],
  bootstrap: [AppComponent],
  providers: [...appConfig.providers],
})
export class AppServerModule {}
