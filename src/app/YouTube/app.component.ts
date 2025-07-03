import { Component, signal } from "@angular/core";
import { MatSidenavModule} from "@angular/material/sidenav";
import { HeaderComponent } from "./header.component";
import { SidebarComponent } from "./sidebar.component";
import { CommonModule } from "@angular/common";
import { SidebarFlowComponent } from "./sidebarflow.component";
import { RouterModule } from "@angular/router";

@Component({
    selector:'app-root',
    standalone:true,
    imports: [CommonModule,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent, SidebarFlowComponent,
    RouterModule],
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
                <router-outlet/>
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

    
}