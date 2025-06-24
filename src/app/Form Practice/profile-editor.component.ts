import { Component, inject} from "@angular/core";
import { ReactiveFormsModule, FormBuilder,Validators, FormArray } from "@angular/forms";
import { CommonModule } from "@angular/common";
@Component({
    selector:'app-profile-editor',
    template:`
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
        <label for="first-name">First Name:</label>
        <input id="first-name" type="text" formControlName="firstName">
        <label for="last-name">Last Name:</label>
        <input id="last-name" type="text" formControlName="lastName">
        
        <div formGroupName="address">
            <h2>Address</h2>

            <label for="street">Street:</label>
            <input id="street" type="text" formControlName="street">

            <label for="city">City:</label>
            <input id="city" type="text" formControlName="city">

            <label for="state">State:</label>
            <input id="state" type="text" formControlName="state">

            <label for="zip">Zip Code:</label>
            <input id="zip" type="text" formControlName="zip">
        </div>

        <div formArrayName="aliases">
            <h2>Aliases</h2>
            <button type="button" (click)="addAlias()">
                + Add another alias
            </button>
            @for (alias of aliases.controls; track $index; let i = $index) {
                <div>
                    <label for="alias-{{i}}">Alias:</label>
                    <input id="alias-{{i}}" type="text" [formControlName]="i">
                </div>
            }
        </div>

        <p>Complete the form to enable button.</p>
        <button type="submit" [disabled]="!profileForm.valid">
            Submit
        </button>

        <p>Form Status: {{profileForm.status}}</p>
    </form>
    `,
    imports:[ReactiveFormsModule, CommonModule]
})

export class ProfileEditorComponent {
    private formBuilder = inject (FormBuilder);
    profileForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: [''],
        address: this.formBuilder.group({
            street:[''],
            city: [''],
            state: [''],
            zip: [''],
        }),
        aliases:this.formBuilder.array([this.formBuilder.control('')]),
    });

    get aliases() {
        return this.profileForm.get('aliases') as FormArray;
    }

    updateProfile() {
        this.profileForm.patchValue({
            firstName:'Harry',
            address: {
                street:'123 Drew Street',
            },
        });
    }

    addAlias() {
        this.aliases.push(this.formBuilder.control(''));
    }

    onSubmit() {
        console.warn(this.profileForm.value);
    }
}