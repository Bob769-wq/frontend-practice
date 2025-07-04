import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { Video } from "./video.model";


@Component ({
    selector:'app-video-card',
    standalone:true,
    imports:[CommonModule, MatCardModule],
    template:`
    <div class="w-full flex flex-col">
        <div class="w-full overflow-hidden aspect-video rounded-lg" >
        <img [src]="video().thumbnailUrl" 
        [alt]="video().title"
        class="w-full h-full object-cover rounded-lg">
        </div>
        <div class="py-4">
            <div class="flex gap-3">
                <img [src]="video().channelpic" 
                [alt]="video().channel"
                class="w-10 h-10 rounded-full object-cover">
                <div class="flex flex-col">
                    <h3 class="font-semibold mb-1 line-clamp-2 leading-tight">
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