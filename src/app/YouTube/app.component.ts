import { Component, signal } from "@angular/core";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from "./header.component";
import { SidebarComponent } from "./sidebar.component";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-root',
    standalone:true,
    imports: [CommonModule,
            MatSidenavModule,
            MatToolbarModule,
            HeaderComponent,
            SidebarComponent,
    ],
    template:`
    <mat-sidenav-container class="h-screen">
        <mat-sidenav mode="side" opened fixedInViewport [fixedTopGap]="64">
            <app-sidebar/>
        </mat-sidenav>

        <mat-sidenav mode="over" [opened]="sidenavOpened()">
            <app-sidebar/>
        </mat-sidenav>

        <mat-sidenav-content>
            <app-header (output)="toggleSidenav()"/>
            <main></main>
        </mat-sidenav-content>
    </mat-sidenav-container>
    `
})
export class AppComponent {
    sidenavOpened = signal(false);
    toggleSidenav(){
        this.sidenavOpened.update(open=>!open)
    }
}