import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Modal02Component } from './app/modal/modal.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
