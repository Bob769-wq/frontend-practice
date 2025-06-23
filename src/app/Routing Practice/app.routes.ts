import { Route } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { SearchComponent } from './pages/search.component';
import { ShopComponent } from './pages/shop.component';
import { ProductDetailComponent } from './pages/product-detail.component';
import { NotFoundComponent } from './pages/not-found.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {path:'profile',
    loadComponent:()=>import('./pages/profile.component').then(m=>m.ProfileComponent),
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
