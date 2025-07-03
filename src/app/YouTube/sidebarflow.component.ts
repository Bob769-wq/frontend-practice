import { Component, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

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

     <a 
     routerLink="/" routerLinkActive="bg-gray-200" [routerLinkActiveOptions]="{exact:true}"
     class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
      <mat-icon class="mr-4">home</mat-icon>
      <span>首頁</span>
     </a>
     <a 
     routerLink="/shorts" routerLinkActive="bg-gray-200"
     class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
      <mat-icon class="mr-4">play_arrow</mat-icon>
      <span>Shorts</span>
     </a>
     <a 
     routerLink="/subscriptions" routerLinkActive="bg-gray-200"
     class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
      <mat-icon class="mr-4">subscriptions</mat-icon>
      <span>訂閱內容</span>
     </a>

     <hr class="my-3 border-t border-gray-300" />

     <div class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
      <span>個人中心</span>
      <mat-icon class="mr-4">arrow_forward_ios</mat-icon>
     </div>
     <div class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
      <mat-icon class="mr-4">history</mat-icon>
      <span>觀看紀錄</span>
     </div>
     <div class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
      <mat-icon class="mr-4">playlist_play</mat-icon>
      <span>播放清單</span>
     </div>
     <div class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
      <mat-icon class="mr-4">watch_later</mat-icon>
      <span>稍後觀看</span>
     </div>
     <div class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
      <mat-icon class="mr-4">thumb_up</mat-icon>
      <span>喜歡的影片</span>
     </div>

     <hr class="my-3 border-t border-gray-300" />

    

    </aside>
    
    `
})
export class SidebarFlowComponent {
    readonly closeMenu = output<void>();
}