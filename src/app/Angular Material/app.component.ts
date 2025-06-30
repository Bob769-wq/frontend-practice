import { Component } from "@angular/core";
import { MaterialPracticeComponent } from "./material-practice.component";

@Component({
    selector:'app-root',
    standalone:true,
    imports:[MaterialPracticeComponent],
    template:`
    <app-material-practice/>
    `
})
export class AppComponent{}