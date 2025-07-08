import { Injectable, signal } from "@angular/core";
import { Video } from "./video.model";

@Injectable({providedIn:'root'})
export class VideoService {
    private readonly videos = signal<Video[]>([
        {id:'1',
         title:'帽子給我好嗎',
         channel:'Xavier',
         thumbnailUrl:'thumbnails/Xavier.webp',
         channelPic:'thumbnails/Xavier.webp',
         views:789,
         createdAt:'2010-07-02',
         description:'帽子給我',
        },    
        {id:'2',
         title:'帽子給我好嗎',
         channel:'Xavier',
         thumbnailUrl:'thumbnails/test.jpeg',
         channelPic:'thumbnails/Xavier.webp',
         views:789,
         createdAt:'2010-07-02',
         description:'給我帽子',
        }, 
    ]);

    getVideos = ():Video[] => this.videos();

    getVideoById(id:string):Video | undefined {
        return this.videos().find(v=>v.id === id);
    }
}