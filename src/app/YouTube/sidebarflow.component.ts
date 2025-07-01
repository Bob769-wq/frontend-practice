import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";


@Component({
    selector:'app-sidebar-flow',
    standalone:true,
    imports:[MatIconModule,CommonModule],
    template:`
    <aside class="w-[240px] h-full bg-gray-100 p-4 shadow-md">
     <div class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
    <mat-icon class="mr-3">home</mat-icon>
    <span>首頁</span>
     </div>
    <div class="flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
    <mat-icon class="mr-3">subscriptions</mat-icon>
    <span>訂閱內容</span>
    </div>
    </aside>
    `
})
export class SidebarFlowComponent {

}