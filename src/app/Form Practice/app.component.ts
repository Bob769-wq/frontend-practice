import { Component } from "@angular/core";
import { NameEditorComponent } from "./name-editor.component";

@Component ({
    selector:'app-root',
    imports:[NameEditorComponent],
    template:`
    <h1>Reactive Forms</h1>
    <app-name-editor/>
    `
})

export class AppComponent {

}