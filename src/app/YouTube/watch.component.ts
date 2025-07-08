import { Component, computed, effect, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { VideoService } from "./video.service";

@Component ({
    selector:'app-watch',
    standalone:true,
    imports:[CommonModule],
    template:`
    
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