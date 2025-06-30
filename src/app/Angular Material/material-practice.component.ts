import { Component, signal } from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from "@angular/material/card"

@Component({
    selector:'app-material-practice',
    standalone:true,
    imports:[MatButtonModule, MatToolbarModule, MatCardModule],
    template:`
    <button mat-raised-button color="primary" (click)="increment()">
      click:{{ count() }}
    </button>
    <mat-toolbar color='primary'>
        my app
    </mat-toolbar>
    <mat-card>
        <mat-card-title>This is Title</mat-card-title>
        <mat-card-content>
            gooloogooloo
        </mat-card-content>
        <mat-card-actions>
            <button mat-button color="primary">1</button>
            <button mat-button color="primary">2</button>
        </mat-card-actions>
    </mat-card>
    `
})
export class MaterialPracticeComponent {
    count =signal(0);
    increment () {
        this.count.update(c=>c+1);
    }
}