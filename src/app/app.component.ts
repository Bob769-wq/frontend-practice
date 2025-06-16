import { Component, signal} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template:`
  <h1 class="text-2xl mb-4">Test App</h1>

  <nav class="flex gap-4 mb-4">
    <a [routerLink]="['/']" class="text-blue-600">Home</a>
    <a [routerLink]="[aboutPath()]" class="text-blue-600">About</a>
  </nav>

  <router-outlet></router-outlet>
  `,
  styles:``
})
export class AppComponent {
  readonly aboutPath =signal('/about');
}
