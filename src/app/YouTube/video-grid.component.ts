import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoCardComponent} from "./video-card.component";
import { Video } from "./video.model";
@Component({
    selector:'app-video-grid',
    standalone:true,
    imports:[CommonModule, VideoCardComponent],
    template:`
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        @for (v of videos(); track v.id) {
            <app-video-card [video]="v"/>
        }
    </div>
    `
})
export class VideoGridComponent {
    readonly videos = input.required<Video[]>();
}