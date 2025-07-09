import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";


export const appRoutes: Route[] = [
    {path:'', component:HomeComponent},
    {path:'subscriptions',
     loadComponent:()=>import('./subscriptions/subscriptions.component').then(m=>m.SubscriptionsComponent)
    },
    {
        path:'watch/:videoId',
        loadComponent:()=>import('./watch.component').then(m=>m.WatchComponent)
    }
]