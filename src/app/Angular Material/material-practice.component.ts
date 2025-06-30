import { Component, signal } from "@angular/core";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector:'app-material-practice',
    standalone:true,
    imports:[MatButtonModule],
    template:`
    <button mat-raised-button>click me</button>
    `
})
export class MaterialPracticeComponent {
    count = signal(0);
}