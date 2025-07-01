import { Component } from "@angular/core";
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
        <mat-sidenav mode="side" >
            <app-sidebar/>
        </mat-sidenav>

        <mat-sidenav-content>
            <app-header/>
            <main></main>
        </mat-sidenav-content>
    </mat-sidenav-container>
    `
})
export class AppComponent {

}