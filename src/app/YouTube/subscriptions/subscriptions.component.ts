 import { Component, signal } from "@angular/core";
 import { CommonModule } from "@angular/common";
 import { VideoGridComponent } from "../video-grid.component";
 import { Video } from "../video.model";

 @Component ({
    selector:'app-subscriptions',
    standalone:true,
    imports:[CommonModule,VideoGridComponent],
    template:`
    <h2 class="text-xl font-bold mb-4">最新</h2>
    <app-video-grid [videos]="videos()"/>
    `
 })
 export class SubscriptionsComponent {
    readonly videos = signal<Video[]>([
        {
            id:'101',
            title:'印度F4',
            channel:'嘟嘟嚕嘟噠噠噠',
            thumbnailUrl:'thumbnails/doctor.jpeg',
            channelPic:'thumbnails/Polish_Jerry.jpg',
            views:65655,
            createdAt:'2014-07-03',
            description:'never gonna give you up'
        }
    ])
 }