import { Component } from "@angular/core";
import { MaterialPracticeComponent } from "./material-practice.component";
import { InputExampleComponent } from "./form-practice.component";

@Component({
    selector:'app-root',
    standalone:true,
    imports: [MaterialPracticeComponent, InputExampleComponent],
    template:`
    <app-material-practice/>
    <app-input-example/>
    `
})
export class AppComponent{}