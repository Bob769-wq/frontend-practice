import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';
import { SearchComponent } from './search.component';


export const appRoutes: Route[] = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'users', component:UserListComponent},
    {path:'users/:id', component:UserDetailComponent},
    {path:'search', component:SearchComponent}
];
