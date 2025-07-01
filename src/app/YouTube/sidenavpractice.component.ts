import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <mat-sidenav-container >
      <mat-sidenav #sidenav mode="push" class="w-60">
        <p class="p-4">選單內容</p>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button mat-icon-button (click)="sidenav.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
          <span class="ml-4">My App</span>
        </mat-toolbar>

        <div class="p-4">
          <p>這是主內容區塊</p>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class PracticeComponent {}
