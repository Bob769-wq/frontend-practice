import { Component, output, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

interface MenuItem {
    icon: string;
    label: string;
    route?:string;
    isRouterLink?:boolean;
}
@Component({
    selector:'app-sidebar-flow',
    standalone:true,
    imports:[MatIconModule,CommonModule,RouterModule],
    template:`
    <aside class="w-[240px] h-full bg-gray-100 p-4 shadow-md">
     
     <button
     class="flex items-center w-full px-3 py-2 rounded-lg cursor-pointer"
     (click)="closeMenu.emit()">
     <mat-icon class="mr-4">menu</mat-icon>
     <span>YouTube</span>
     </button>

     @for (item of mainMenuItems(); track item.label) {
        <a [routerLink]="item.route"
            routerLinkActive="bg-gray-200"
            [routerLinkActiveOptions]="{exact:item.route ==='/'}"
            class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
            <mat-icon class="mr-4">{{item.icon}}</mat-icon>
            <span>{{item.label}}</span>
        </a>
     }

     <hr class="my-3 border-t border-gray-300" />

      <div class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
      <span>個人中心</span>
      <mat-icon class="mr-4">arrow_forward_ios</mat-icon>
     </div>

     @for (item of personalMenuItems(); track item.label) {
        <div class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
            <mat-icon class="mr-4">{{item.icon}}</mat-icon>
            <span>{{item.label}}</span>
        </div>
     }

     <hr class="my-3 border-t border-gray-300" /> 

    

    </aside>
    
    `
})
export class SidebarFlowComponent {
    readonly closeMenu = output<void>();

    readonly mainMenuItems = signal<MenuItem[]>([
        {icon:'home', label:'首頁', route:'/', isRouterLink:true},
        {icon:'play_arrow', label:'Shorts', route:'/shorts', isRouterLink:true},
        {icon:'subscriptions', label:'訂閱內容', route:'/subscriptions', isRouterLink:true}
    ]);

    readonly personalMenuItems = signal<MenuItem[]>([
        {icon:'history', label:'觀看紀錄'},
        {icon:'playlist_play', label:'播放清單'},
        {icon:'watch_later', label:'稍後觀看'},
        {icon:'thumb_up', label:'喜歡的影片'}
    ]);
}