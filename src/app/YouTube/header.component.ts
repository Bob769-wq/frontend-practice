import { Component, output } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-header',
    standalone:true,
    imports:[CommonModule,
             MatIconModule,
             MatIconModule,
             MatButtonModule,
            ],
    styles:`

    `,
    template:`
    <header class="fixed top-0 left-0 right-0 z-20 bg-white shadow flex justify-between items-center h-16 px-4">
        <div class="flex items-center space-x-4">
            <button (click)="toggleMenu.emit()" class="p-2 flex items-center">
                <mat-icon>menu</mat-icon>
            </button>
            <div class="text-lg font-semibold">YouTube</div>
        </div>

        <div class="flex items-center space-x-2">
            <div class="flex items-center border border-gray-300 rounded-full px-2">
                <input type="text" placeholder="搜尋"
                class="outline-none py-1 px-2 w-64 bg-transparent">
                <button class="p-1 hover:bg-gray-100 rounded-full flex items-center">
                    <mat-icon>search</mat-icon>
                </button>
            </div>
                <button class="p-2 rounded-full hover:bg-gray-100 flex items-center">
                    <mat-icon>microphone</mat-icon>
                </button>
        </div>

        <div class="flex items-center space-x-2">
            <button class="flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100">
                <mat-icon>add</mat-icon>
                <span>建立</span>
            </button>
            <button mat-icon class="p-2 rounded-full hover:bg-gray-100 flex items-center">
                <mat-icon>notifications</mat-icon>
            </button>
            <button class="p-2 rounded-full hover:bg-gray-100 flex items-center">
                <mat-icon>account_circle</mat-icon>
            </button>
        </div>

    </header>
    `
})
export class HeaderComponent {
   readonly toggleMenu = output<void>();
}