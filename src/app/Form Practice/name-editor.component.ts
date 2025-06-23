import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule} from "@angular/forms"

@Component({
    selector:'app-name-editor',
    standalone:true,
    imports:[ReactiveFormsModule],
    template:`
    <label for="name">Name:</label>
    <input id="name" type="text" [formControl]="name">
    <p>Value: {{name.value}}</p>
    <button (click)="updateName()">Update Name</button>
    `
})

export class NameEditorComponent {
    name = new FormControl('');

    updateName() {
        this.name.setValue('Nancy');
    }
}