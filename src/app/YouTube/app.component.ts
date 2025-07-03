import { Component, signal } from "@angular/core";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./header.component";
import { SidebarComponent } from "./sidebar.component";
import { CommonModule } from "@angular/common";
import { SidebarFlowComponent } from "./sidebarflow.component";
import { VideoGridComponent } from "./video-grid.component";
import { Video } from "./video-card.component";

@Component({
    selector:'app-root',
    standalone:true,
    imports: [CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    HeaderComponent,
    SidebarComponent, SidebarFlowComponent,
    VideoGridComponent],
    template:`
    <mat-sidenav-container class="h-screen">
        <mat-sidenav #fixedSidenav mode="side" opened fixedInViewport [fixedTopGap]="64">
            <app-sidebar/>
        </mat-sidenav>

        <mat-sidenav 
        #flowSidenav mode="over" position="start" 
        [opened]="flowMenuOpened()" (closed)="onFlowMenuClosed()"
        hasBackdrop="true" (backdropClick)="closeFlowMenu()">
            <app-sidebar-flow (closeMenu)="closeFlowMenu()"/>
        </mat-sidenav>

        <mat-sidenav-content>
            <app-header (toggleMenu)="toggleFlowMenu()"/>
            <main class="pl-[100px] pt-20 pr-10">
                <app-video-grid [videos]="videos()"/>
            </main>
        </mat-sidenav-content>
    </mat-sidenav-container>
    `
})
export class AppComponent {
    flowMenuOpened = signal(false);
    toggleFlowMenu(){
        this.flowMenuOpened.update(open=>!open)
    }

    openFlowMenu(){
        this.flowMenuOpened.set(true);
    }

    closeFlowMenu(){
        this.flowMenuOpened.set(false);
    }

    onFlowMenuClosed(){
        this.flowMenuOpened.set(false);
    }

    readonly videos = signal<Video[]>([
        {id:'1',
         title:'帽子給我好嗎',
         channel:'Xavier',
         thumbnailUrl:'thumbnails/Xavier.webp',
         channelpic:'thumbnails/Xavier.webp',
         views:789,
         createdAt:'2010-07-02'
        },
        
       
        
    ]);
}