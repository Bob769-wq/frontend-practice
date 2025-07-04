import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { SidebarComponent } from "./sidebar.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
    selector:'app-root',
    standalone:true,
    imports: [CommonModule,
    HeaderComponent,
    SidebarComponent,
    RouterModule],
    template:`
    <div class="h-screen grid grid-cols-[240px_1fr] grid-rows-[64px_1fr] md:grid-cols-[240px_1fr] max-md:grid-cols-1">
        <header class="col-span-full bg-white border-b border-gray-200 z-50">
            <app-header (toggleMenu)="toggleFlowMenu()"/>
        </header>

        <aside class="bg-white border-r border-gray-200 overflow-y-auto max-md:hidden">
            <app-sidebar/>
        </aside>

        <main class="bg-gray-50 p-5 overflow-y-auto">
            <router-outlet/>
        </main>
    </div>

    `
})
export class AppComponent {
    flowMenuOpened = signal(false);
    toggleFlowMenu(){
        this.flowMenuOpened.update(open=>!open);
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