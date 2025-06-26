import { Component } from "@angular/core";
import { NameEditorComponent } from "./name-editor.component";
import { ProfileEditorComponent } from "./profile-editor.component";
import { UserFormComponent } from "./user-form.component";
import { ActorFormComponent } from "./actor-form.component";

@Component ({
    selector:'app-root',
    imports: [NameEditorComponent, ProfileEditorComponent, UserFormComponent, ActorFormComponent],
    template:`
    <app-name-editor/>
    <app-profile-editor/>
    <app-user-form/>
    <app-actor-form/>
    `
})

export class AppComponent {
    
}