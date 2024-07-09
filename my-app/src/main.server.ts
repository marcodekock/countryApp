import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { Modal02Component } from './app/modal/modal.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
