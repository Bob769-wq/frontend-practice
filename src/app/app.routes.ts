import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { SearchComponent } from './search.component';
import { ShopComponent } from './shop.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent }, // ⬅️ 指定根路徑到 HomeComponent
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductListComponent },
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
        outlet: 'detail',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
