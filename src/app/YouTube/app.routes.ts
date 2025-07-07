import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";

export const appRoutes: Route[] = [
    {path:'', component:HomeComponent},
    {path:'subscriptions',
     loadChildren:()=>import('./subscriptions/subscriptions.routes').then(m=>m.routes)
    }
]