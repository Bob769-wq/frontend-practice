import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


@Component({
    selector:'app-sidebar',
    standalone:true,
    imports:[CommonModule,
             MatListModule,
             MatIconModule,
             RouterModule
    ],
    template:`
    <nav class="flex flex-col items-center space-y-6 p-4">
        <a routerLink="/" routerLinkActive="bg-gray-200" [routerLinkActiveOptions]="{exact:true}"
        class="flex flex-col items-center w-full 
        rounded-xl hover:bg-gray-100 transition space-y-1">
            <mat-icon>home</mat-icon>
            <span class="text-xs">首頁</span>
        </a>
        <a routerLink="/shorts" class="flex flex-col items-center space-y-1">
            <mat-icon>play_arrow</mat-icon>
            <span class="text-xs">Shorts</span>
        </a>
        <a routerLink="/subscriptions" routerLinkActive="bg-gray-200"
        class="flex flex-col items-center w-full
        rounded-xl hover:bg-gray-100 transition space-y-1">
            <mat-icon>subscriptions</mat-icon>
            <span class="text-xs">訂閱內容</span>
        </a>
        <a routerLink="/account" class="flex flex-col items-center space-y-1">
            <mat-icon>account_circle</mat-icon>
            <span class="text-xs">個人中心</span>
        </a>
    </nav>
    `
})
export class SidebarComponent {
    
}