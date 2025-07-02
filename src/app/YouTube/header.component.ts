import { Component, output } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-header',
    standalone:true,
    imports:[CommonModule,
             MatToolbarModule,
             MatIconModule,
             MatIconModule,
             MatButtonModule,
            ],
    styles:`

    `,
    template:`
    <mat-toolbar color="primary" class="flex justify-between">
        <div class="flex items-center space-x-4">
            <button mat-icon-button (click)="toggleMenu.emit()">
                <mat-icon>menu</mat-icon>
            </button>
            <div>
                YouTube
            </div>
        </div>
    
        <div class="flex items-center space-x-2">
            <div class="flex items-center border border-gray-300  rounded-full px-2">
                <input type="text" placeholder="搜尋" class="outline-none py1 px-2 w-64 bg-transparent">
                <button class="flex items-center">
                    <mat-icon>search</mat-icon>
                </button>
            </div>
            <button mat-icon-button>
                <mat-icon>microphone</mat-icon>
            </button>
        </div>

        <div class="flex items-center">
        <button mat-button>
            <mat-icon>add</mat-icon>
            建立
        </button>
        <button mat-icon-button>
            <mat-icon>notifications</mat-icon>
        </button>
        <button mat-icon-button>
            <mat-icon>account_circle</mat-icon>
        </button>
        </div>
    </mat-toolbar>
    `
})
export class HeaderComponent {
   readonly toggleMenu = output<void>();
}