import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { Router, RouterModule } from "@angular/router";
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
    <mat-nav-list>
        <a mat-list-item routerLink="/home">
            <mat-icon matListIcon>home</mat-icon>
            <span matLine>home</span>
        </a>

         <a mat-list-item routerLink="/subscirptions">
            <mat-icon matListIcon>subscriptions</mat-icon>
            <span matLine>subscirptions</span>
        </a>
        
        <a mat-list-item routerLink="/library">
            <mat-icon matListIcon>video_library</mat-icon>
            <span matLine>library</span>
        </a>

        <a mat-list-item routerLink="/subscirptions">
            <mat-icon matListIcon>account_circle</mat-icon>
            <span matLine>home</span>
        </a>
    </mat-nav-list>
    `
})
export class SidebarComponent {
    
}