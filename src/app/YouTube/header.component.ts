import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatToolbar } from "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector:'app-header',
    standalone:true,
    imports:[CommonModule, MatToolbar, MatIconModule],
    template:`
    <mat-toolbar>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
    <mat-icon>share</mat-icon>
  </button>
</mat-toolbar>

    `
})
export class HeaderComponent {
    
}