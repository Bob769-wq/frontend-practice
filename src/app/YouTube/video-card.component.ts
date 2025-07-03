import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

export interface Video {
    id:string;
    title:string;
    channel:string;
    channelpic:string;
    thumbnailUrl:string;
    views:number;
    createdAt:string;
}

@Component ({
    selector:'app-video-card',
    standalone:true,
    imports:[CommonModule, MatCardModule],
    template:`
    <div class="w-full flex flex-col">
        <img [src]="video().thumbnailUrl" 
        alt="video().title"
        class="w-full object-cover rounded-lg">

        <div class="py-4 mt-2 overflow-hidden">
            <div class="flex gap-3">
                <img [src]="video().channelpic" 
                alt="video().channel"
                class="w-10 h-10 rounded-full object-cover">
                <div class="flex flex-col">
                    <h3 class="font-semibold text-base mb-1 line-clamp-2">
                        {{video().title}}
                    </h3>
                    <p class="text-sm text-gray-600">{{video().channel}}</p>
                    <p class="text-sm text-gray-500">
                        {{video().views | number}}
                    </p>
                </div>
            </div>    
        </div>
    </div>
    `
})
export class VideoCardComponent {
    readonly video = input.required<Video>();
}