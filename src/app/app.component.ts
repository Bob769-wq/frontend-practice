import { Component, signal} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  standalone:true,
  selector: 'app-root',
  template:`
  <h1 class="text-2xl mb-4">Test App</h1>

  <nav class="flex gap-4 mb-4">
    <a [routerLink]="['/']" >Home</a>
    <a [routerLink]="[aboutPath()]">About</a>
    <a [routerLink]="[userList()]">Users</a>
    <a [routerLink]="['/search']">Search</a>
  </nav>

  <router-outlet></router-outlet>
  `,
  styles:``
})
export class AppComponent {
  readonly aboutPath =signal('/about');
  readonly userList =signal('/users');
}