import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { SearchComponent } from './search.component';
import { ShopComponent } from './shop.component';
import { ProductDetailComponent } from './product-detail.component';
import {ProductDetailGuard} from './product-detail.guard'
import { NotFoundComponent } from './not-found.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'shop', 
    component:ShopComponent,
    children: [
      {path:':id',component:ProductDetailComponent,
        canActivate:[ProductDetailGuard],
      },
    ],
  },
  {path:'**', component:NotFoundComponent},
];
