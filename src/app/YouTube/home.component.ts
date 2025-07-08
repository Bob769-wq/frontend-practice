import { Component, computed, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoGridComponent } from "./video-grid.component";
import { VideoService } from "./video.service";

@Component({
    standalone:true,
    selector:'app-home',
    imports:[CommonModule,VideoGridComponent],
    template:`
    <app-video-grid [videos]="videos()"/>
    `
})
export class HomeComponent {
    private videoService = inject(VideoService);
    readonly videos = computed(()=>this.videoService.getVideos())
}