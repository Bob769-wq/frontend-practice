import { Component } from "@angular/core";
import { NameEditorComponent } from "./name-editor.component";
import { ProfileEditorComponent } from "./profile-editor.component";

@Component ({
    selector:'app-root',
    imports: [NameEditorComponent, ProfileEditorComponent],
    template:`
    <h1>Reactive Forms</h1>
    <app-name-editor/>
    <app-profile-editor>
    `
})

export class AppComponent {

}