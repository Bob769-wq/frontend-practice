import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  standalone:true,
  selector: 'app-root',
  template:`
  <h1 class="text-2xl mb-4">Test App</h1>

  <nav class="flex gap-4 mb-4">
    <a routerLink="/" >Home</a>
    <a routerLink ="/about">About</a>
    <a routerLink ="/search" class="text-blue-600">Search</a>
    <a routerLink ="/shop">Shop</a>
  </nav>

  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}