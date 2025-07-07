import { Component, output, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

@Component ({
    selector:'app-category-bar',
    standalone:true,
    imports:[CommonModule, MatButtonModule],
    template:`
    <div class="overflow-x-auto whitespace-nowrap p-2 bg-gray-50">
        @for (category of categories(); track category) {
            <button (click)="onSelect(category)"
            [class.bg-black]="selected()===category"
            [class.text-white]="selected()===category"
            class="text-sm rounded-full px-4 py-1 mr-2 border hover:bg-gray-200 transition whitespace-nowrap">
                {{category}}
            </button>
        }
    </div>
    `
})
export class CategoryBarComponent {
    readonly categories = signal([
        '全部',
        '音樂',
        '新聞',
        'Podcast',
        '合輯',
        '棒球',
        '遊戲',
        '直播中',
        '動畫',
        '烹飪',
        '最新上傳',
        '已觀看',
        '讓你耳目一新',
    ])

    readonly selected = signal('全部');
    readonly selectCategory = output<string>();

    onSelect(category: string) {
        this.selected.set(category);
        this.selectCategory.emit(category);
    }
}