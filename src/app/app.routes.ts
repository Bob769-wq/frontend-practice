import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { SearchComponent } from './search.component';
import { ShopComponent } from './shop.component';
import { ProductDetailComponent } from './product-detail.component';
import { NotFoundComponent } from './not-found.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {path:'profile',
    loadComponent:()=>import('./profile.component').then(m=>m.ProfileComponent),
  },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'shop', 
    component:ShopComponent,
    children: [
      {path:'', redirectTo:'1', pathMatch:'full'},
      {path:':id',component:ProductDetailComponent,
      },
    ],
  },
  {path:'**', component:NotFoundComponent},
];
