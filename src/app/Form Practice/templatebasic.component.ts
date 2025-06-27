import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-template-basic',
    standalone:true,
    imports:[CommonModule],
    template:`
    <div class="p-4 max-w-xs mx-auto text-center">
    <button (click)="isLoaded=!isLoaded"
    class="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        Switch isLoaded = {{isLoaded}}
    </button>

    <div *ngIf="isLoaded; else loadingBlock" class="text-green-600">
    <p>Hello!</p>
    </div>

    <ng-template #loadingBlock>
        <p class="italic text-gray-500">Data Loading...</p>
    </ng-template>
    </div>

   
    
    `
})
export class TemplateBasicComponent {
    isLoaded = false;

}