import { Component, computed, effect, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { VideoService } from "./video.service";


@Component ({
    selector:'app-watch',
    standalone:true,
    imports:[CommonModule],
    template:`
    <div class="px-4 py-6 max-w-screen-2xl mx-auto">
  <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-8">
    @if (video()) {
      <div>
        <div
          class="aspect-video w-full bg-black rounded-lg shadow-md max-w-full sm:max-w-xl md:max-w-2xl mx-auto lg:mx-w-4xl xl:max-w-6xl">
        </div>
        <h1 class="text-xl font-bold mt-4">{{ video()?.title }}</h1>

        <div class="flex items-center justify-between mt-3">
          <div class="flex items-center gap-3">
            <img [src]="video()?.channelPic" [alt]="video()?.channel" class="w-10 h-10 rounded-full object-cover" />
            <span class="font-semibold">{{ video()?.channel }}</span>
            <button class="bg-gray-200 px-4 py-1 rounded-2xl hover:bg-gray-300">加入</button>
            <button class="bg-gray-100 px-4 py-1 rounded-2xl hover:bg-gray-300">訂閱</button>
          </div>

          <div class="flex items-center gap-4 mt-3">
            <button class="px-2 py-1 hover:bg-gray-100 rounded">👍</button>
            <button class="px-2 py-1 hover:bg-gray-100 rounded">👎</button>
            <button class="px-2 py-1 hover:bg-gray-100 rounded">分享</button>
            <button class="px-2 py-1 hover:bg-gray-100 rounded">下載</button>
          </div>
        </div>
        
        <div class="text-gray-900 text-sm mt-3 flex items-center gap-2">
            <span>觀看次數：{{video()?.views}}次</span>
            <span>發佈時間：{{video()?.createdAt}}</span>
        </div>
        <div class="mt-6">
            <h2 class="text-lg font-semibold mb-4">留言</h2>
            <div class="flex items-start gap-3 mb-6">
                <img [src]="video()?.channelPic" alt="" class="w-10 h-10 rounded-full object-cover">
                <textarea 
                class="flex-1 "
                placeholder="發表留言"
                name="" id=""></textarea>
            </div>
    <!--假留言-->
    <div class="space-y-6">
        <div class="flex gap-3">
            <img src="thumbnails/Xavier.webp" alt="" class="w-10 h-10 rounded-full object-cover">
            <div>
                <p class="font-medium">Xavier</p>
                <p class="text-sm text-gray-700">爛死</p>
            </div>
        </div>
    </div>
        </div>
      </div>
    } @else {
      <div class="col-span-full text-center text-gray-400 py-10">404 Not Found</div>
    }

    <div class="hidden lg:block">
      <p class="text-gray-400 text-sm mb-2">推薦影片</p>
      <div class="space-y-4">
        <div class="h-24 bg-gray-200 rounded-md"></div>
        <div class="h-24 bg-gray-200 rounded-md"></div>
        <div class="h-24 bg-gray-200 rounded-md"></div>
      </div>
    </div>

    <div class="block lg:hidden mt-8 px-2">
      <p class="text-gray-400 text-sm mb-2">推薦影片</p>
      <div class="space-y-4">
        <div class="h-24 bg-gray-200 rounded-md"></div>
        <div class="h-24 bg-gray-200 rounded-md"></div>
        <div class="h-24 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  </div>
</div>

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