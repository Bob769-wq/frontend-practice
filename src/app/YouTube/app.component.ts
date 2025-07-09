import { Component, computed, inject, signal } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { SidebarComponent } from "./sidebar.component";
import { SidebarFlowComponent } from "./sidebarflow.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Router, NavigationEnd } from "@angular/router";
import { CategoryBarComponent } from "./categorybar.component";
import { filter } from "rxjs";

@Component({
    selector:'app-root',
    standalone:true,
    imports: [CommonModule,
    HeaderComponent,
    SidebarComponent, 
    SidebarFlowComponent,
    RouterModule,
    CategoryBarComponent],
    template:`
    <div class="min-h-screen flex flex-col">
        <header class="h-16 bg-white border-b border-gray-200 z-50 flex-shrink-0">
            <app-header (toggleMenu)="toggleFlowMenu()"/>
        </header>

        <div 
        [ngClass]="isWatchPage() ? 'block':'grid grid-cols-[96px_1fr] max-md:grid-cols-1'"
        class="overflow-hidden flex-1">
        @if(!isWatchPage()){
            <aside class="bg-white border-r border-gray-200 overflow-y-auto max-md:hidden">
                <app-sidebar/>
            </aside>
        }
         <main class="bg-gray-50 px-5 scroll-py-3 overflow-y-auto"> 
                @if (!isWatchPage()) {
                    <app-category-bar/>    
                }
                <router-outlet/>
            </main>
        </div>

        @if (flowMenuOpened()) {
            <button class="fixed inset-0 bg-black/30 z-40"
            (click)="closeFlowMenu()" aria-label="closeSidebarFlow"></button>
            <app-sidebar-flow
            (closeMenu)="closeFlowMenu()"
            class="fixed top-0 left-0 h-full bg-white w-[240px] z-50 shadow-lg transition-transform"
            [class.-translate-x-full]="!flowMenuOpened()"
            [class.translate-x-0]="flowMenuOpened()"></app-sidebar-flow>
        }
    </div>
    `
})
export class AppComponent {
    private router = inject(Router);
    flowMenuOpened = signal(false);
    currentUrl = signal('');

    isWatchPage = computed(()=>
    this.currentUrl().includes('/watch') || this.currentUrl().includes('/video/'));

    constructor() {
        this.router.events
        .pipe(filter(event=>event instanceof NavigationEnd))
        .subscribe((event:NavigationEnd)=>{
            this.currentUrl.set(event.url);
        })
    }

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