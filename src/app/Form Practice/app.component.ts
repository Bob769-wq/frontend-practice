import { Component } from "@angular/core";
import { NameEditorComponent } from "./name-editor.component";
import { ProfileEditorComponent } from "./profile-editor.component";
import { UserFormComponent } from "./user-form.component";
import { ActorFormComponent } from "./actor-form.component";
import { CardComponent } from "./card.component";
import { DrinkOrderComponent } from "./drink-order.component";
import { TemplateBasicComponent } from "./templatebasic.component";


@Component ({
    selector:'app-root',
    imports: [NameEditorComponent, ProfileEditorComponent, UserFormComponent, ActorFormComponent, DrinkOrderComponent, TemplateBasicComponent, CardComponent],
    template:`
    <app-name-editor/>
    <app-profile-editor/>
    <app-user-form/>
    <app-actor-form/>
    <app-drink-order/>
    <app-template-basic/>

    <app-card>
        <h2 card-title>Title</h2>
        <p>The Content</p>
        <button card-footer class="px-3 py-1 border rounded">Close</button>
    </app-card>

    <app-card>
        <div card-title>Another Title</div>
        <ul>
            <li>1</li>
            <li>2</li>
        </ul> 
        <button card-footer class="text-sm border p-2 rounded-xl">More</button>
    </app-card>

    
   
    `
})

export class AppComponent {
    
}