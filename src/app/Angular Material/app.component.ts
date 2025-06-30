import { Component } from "@angular/core";
import { MaterialPracticeComponent } from "./material-practice.component";
import { InputExampleComponent } from "./form-practice.component";
import { CheckComponent } from "./check.component";

@Component({
    selector:'app-root',
    standalone:true,
    imports: [MaterialPracticeComponent, InputExampleComponent, CheckComponent],
    template:`
    <app-material-practice/>
    <app-input-example/>
    <app-checkbox/>
    `
})
export class AppComponent{}