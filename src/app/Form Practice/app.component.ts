import { Component } from "@angular/core";
import { NameEditorComponent } from "./name-editor.component";
import { ProfileEditorComponent } from "./profile-editor.component";
import { UserFormComponent } from "./user-form.component";

@Component ({
    selector:'app-root',
    imports: [NameEditorComponent, ProfileEditorComponent, UserFormComponent],
    template:`
    <app-name-editor/>
    <app-profile-editor/>
    <app-user-form/>
    `
})

export class AppComponent {
    
}