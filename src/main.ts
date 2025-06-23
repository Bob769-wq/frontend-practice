import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Routing Practice/app.config';
// import { AppComponent } from './app/Routing Practice/app.component';
import { AppComponent } from './app/Form Practice/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
