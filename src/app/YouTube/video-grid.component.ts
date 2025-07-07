import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Video } from "./video.model";
@Component({
    selector:'app-video-grid',
    standalone:true,
    imports:[CommonModule, ],
    template:`
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        @for (video of videos(); track video.id) {
        <div class="w-full flex flex-col">
        <div class="w-full overflow-hidden aspect-video rounded-lg" >
        <img [src]="video.thumbnailUrl" 
        [alt]="video.title"
        class="w-full h-full object-cover rounded-lg">
        </div>
            <div class="py-4">
                <div class="flex gap-3">
                <img [src]="video.channelPic" 
                [alt]="video.channel"
                class="w-10 h-10 rounded-full object-cover">
                    <div class="flex flex-col">
                    <h3 class="font-semibold mb-1 line-clamp-2 leading-tight">
                        {{video.title}}
                    </h3>
                    <p class="text-sm text-gray-600">{{video.channel}}</p>
                    <p class="text-sm text-gray-500">
                        {{video.views}}
                    </p>
                    </div>
                </div>    
            </div>
        </div>
        }
    </div>
    `
})
export class VideoGridComponent {
    readonly videos = input.required<Video[]>();
}