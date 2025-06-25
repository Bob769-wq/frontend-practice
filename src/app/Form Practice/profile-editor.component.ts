import { Component, inject} from "@angular/core";
import { ReactiveFormsModule,Validators, FormArray, FormControl, FormGroup, NonNullableFormBuilder } from "@angular/forms";
import { CommonModule } from "@angular/common";

interface ProfileForm {
    firstName: FormControl<string>;
    lastName:FormControl<string>;
    address:FormGroup<{
        street:FormControl<string>;
        city:FormControl<string>;
        state:FormControl<string>;
        zip:FormControl<string>;
    }>;
    aliases:FormArray<FormControl<string>>;
}
@Component({
    selector:'app-profile-editor',
    standalone:true,
     imports:[ReactiveFormsModule, CommonModule],
    template:`
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="max-w-xl mx-auto mt-6 p-6 bg-white shadow rounded space-y-6">
      <div>
        <label for="first-name" class="block text-sm font-medium text-gray-700">First Name</label>
        <input id="first-name" type="text" formControlName="firstName" class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>

      <div>
        <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName" class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>

      <div formGroupName="address" class="space-y-4">
        <h2 class="text-lg font-semibold text-gray-800">Address</h2>

        <div>
          <label for="street" class="block text-sm font-medium text-gray-700">Street</label>
          <input id="street" type="text" formControlName="street" class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label for="city" class="block text-sm font-medium text-gray-700">City</label>
          <input id="city" type="text" formControlName="city" class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label for="state" class="block text-sm font-medium text-gray-700">State</label>
          <input id="state" type="text" formControlName="state" class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div>
          <label for="zip" class="block text-sm font-medium text-gray-700">Zip Code</label>
          <input id="zip" type="text" formControlName="zip" class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      <div formArrayName="aliases" class="space-y-4">
        <h2 class="text-lg font-semibold text-gray-800">Aliases</h2>
        <button type="button" (click)="addAlias()" class="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition">
          + Add another alias
        </button>

        @for (alias of aliases.controls; track $index; let i = $index) {
          <div>
            <label [for]="'alias-' + i" class="block text-sm font-medium text-gray-700">Alias {{ i + 1 }}</label>
            <input [id]="'alias-' + i" type="text" [formControlName]="i" class="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
        }
      </div>

      <p class="text-sm text-gray-500">Complete the form to enable button.</p>
      <button type="submit" [disabled]="!profileForm.valid" class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 disabled:bg-gray-300 transition">
        Submit
      </button>

      <p class="text-sm text-gray-700">Form Status: <span class="font-semibold">{{ profileForm.status }}</span></p>
    </form>
  `,
})

export class ProfileEditorComponent {
    #fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);
    //#是private
    profileForm = this.#fb.group<ProfileForm>({
        firstName: this.#fb.control('', Validators.required),
        lastName:this.#fb.control(''),
        address: this.#fb.group({
            street:this.#fb.control(''),
            city: this.#fb.control(''),
            state: this.#fb.control(''),
            zip: this.#fb.control(''),
        }),
        aliases:this.#fb.array([
            this.#fb.control('')
        ]),
    });

    get aliases() {
        return this.profileForm.get('aliases') as FormArray<FormControl<string>>;
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
        this.aliases.push(this.#fb.control(''));
    }

    onSubmit() {
        console.warn(this.profileForm.getRawValue()); //getRawValue()可以把disabled的值也拿到
    }
}