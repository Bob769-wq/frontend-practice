import { Component, computed, effect, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { VideoService } from "./video.service";


@Component ({
    selector:'app-watch',
    standalone:true,
    imports:[CommonModule],
    template:`
    @if (video()) {
        <div class="max-w-4xl mx-auto p-6">
            <div class="aspect-video bg-black rounded-lg mb-4"></div>
        </div>

        <h1 class="text-xl font-bold">{{video()?.title}}</h1>
        <p class="text-gray-600 mt-1">頻道：{{ video()?.channel }}</p>
        <p class="text-gray-500 text-sm">{{ video()?.views }} 次觀看</p>
        <p class="mt-4 text-gray-700">{{ video()?.description || '沒有影片描述。' }}</p>
    }
    `
})
export class WatchComponent {
    private route = inject(ActivatedRoute);
    private videoService = inject(VideoService);
    private videoId = signal('');

    constructor() {
        effect(()=>{
            this.videoId.set(this.route.snapshot.paramMap.get('id')||'');
        });
    }

    readonly video = computed(()=>
    this.videoService.getVideoById(this.videoId()))
}