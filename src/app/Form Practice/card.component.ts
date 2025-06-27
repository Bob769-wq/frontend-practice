import { Component } from "@angular/core";

@Component({
    selector:'app-card',
    standalone:true,
    template:`
    <div class="border rounded p-4 shadow bg-blue-50">
        <div class="text-xl font-bold text-blue-800 mb-2">
            <ng-content select="[card-title]"></ng-content>
        </div>
        <div class="text-gray-700">
            <ng-content></ng-content>
        </div>
        <div class="text-red-500 mt-4 ">
            <ng-content select="[card-footer]"></ng-content>
        </div>
    </div>
    `
})
export class CardComponent{}