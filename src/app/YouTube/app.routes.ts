import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SubscriptionsComponent } from "./subscriptions.component";

export const appRoutes: Route[] = [
    {path:'', component:HomeComponent},
    {path:'subscriptions',component:SubscriptionsComponent},
]