import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoGridComponent } from "./video-grid.component";
import { Video } from "./video.model";

@Component({
    standalone:true,
    selector:'app-home',
    imports:[CommonModule,VideoGridComponent],
    template:`
    <app-video-grid [videos]="videos()"/>
    `
})
export class HomeComponent {
    readonly videos = signal<Video[]>([
        {id:'1',
         title:'帽子給我好嗎',
         channel:'Xavier',
         thumbnailUrl:'thumbnails/Xavier.webp',
         channelPic:'thumbnails/Xavier.webp',
         views:789,
         createdAt:'2010-07-02'
        },    
        {id:'2',
         title:'帽子給我好嗎',
         channel:'Xavier',
         thumbnailUrl:'thumbnails/test.jpeg',
         channelPic:'thumbnails/Xavier.webp',
         views:789,
         createdAt:'2010-07-02'
        },    
    ]);
}