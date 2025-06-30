import { Component, signal } from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from "@angular/material/card"

@Component({
    selector:'app-material-practice',
    standalone:true,
    imports:[MatButtonModule, MatToolbarModule, MatCardModule],
    template:`
    <mat-toolbar color="primary" class="flex justify-between">
    <span>toolbox</span>
    <button mat-button (click)="increment()">
        click({{count()}})
    </button>
    </mat-toolbar>
    `
})
export class MaterialPracticeComponent {
    count =signal(0);
    increment () {
        this.count.update(c=>c+1);
    }
}