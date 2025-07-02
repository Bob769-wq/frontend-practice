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
    <mat-card class="w-full">
        <img  mat-card-image [src]="video().thumbnailUrl" alt="{{video().title}}">
        <mat-card-content class="p-4">
            <div class="flex gap-3">
                <img [src]="video().channelpic" alt="{{video().channel}}"
                class="w-10 h-10 rounded-full object-cover">
            
            <div class="flex flex-col">
            <h3 class="font-semibold text-base mb-1">{{video().title}}</h3>
            <p class="text-sm text-gray-600">{{video().channel}}</p>
            <p>{{video().views | number}}次</p>
            </div>
            </div>
        </mat-card-content>
    </mat-card>
    `
})
export class VideoCardComponent {
    readonly video = input.required<Video>();
}