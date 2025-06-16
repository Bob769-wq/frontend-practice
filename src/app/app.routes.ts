import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

export const appRoutes: Route[] = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent}
];
