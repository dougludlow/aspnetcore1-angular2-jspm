import 'reflect-metadata';
// workaround for https://github.com/angular/angular/issues/6007
import Zone from 'zone.js';
window.Zone = Zone;

import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

bootstrap(AppComponent);
