// src/app/app.server.module.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { appConfig } from './app.config';

@NgModule({
  imports: [ServerModule],
  providers: [...appConfig.providers],
})
export class AppServerModule {}
