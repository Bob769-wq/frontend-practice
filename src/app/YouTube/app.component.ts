import { Component, signal } from "@angular/core";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./header.component";
import { SidebarComponent } from "./sidebar.component";
import { CommonModule } from "@angular/common";
import { SidebarFlowComponent } from "./sidebarflow.component";

@Component({
    selector:'app-root',
    standalone:true,
    imports: [CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    HeaderComponent,
    SidebarComponent, SidebarFlowComponent],
    template:`
    <mat-sidenav-container class="h-screen">
        <mat-sidenav #fixedSidenav mode="side" opened fixedInViewport [fixedTopGap]="64">
            <app-sidebar/>
        </mat-sidenav>

        <mat-sidenav 
        #flowSidenav mode="over" position="start" 
        [opened]="flowMenuOpened()" (closed)="onFlowMenuClosed()"
        (backdropClick)="closeFlowMenu()">
            <app-sidebar-flow (closeMenu)="closeFlowMenu()"/>
        </mat-sidenav>

        <mat-sidenav-content>
            <app-header/>
            <main></main>
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