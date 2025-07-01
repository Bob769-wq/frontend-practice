import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-header',
    standalone:true,
    imports:[CommonModule,
             MatToolbarModule,
             MatIconModule,
             MatIconModule,
             MatButtonModule,
             MatInputModule
            ],
    styles:`

    `,
    template:`
    <mat-toolbar color="primary" class="flex justify-between">
        <div class="flex items-center space-x-4">
            <button mat-icon-button>
                <mat-icon>menu</mat-icon>
            </button>
            <div>
                YouTube
            </div>
        </div>
    
        <div class="flex items-center space-x-2">
        <mat-form-field appearance="outline" class="w-full max-w-md">

            <input matInput placeholder="搜尋">

            <button mat-icon-button matSuffix aria-label="搜尋">
                <mat-icon>search</mat-icon>
            </button>
        </mat-form-field>
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
    
}