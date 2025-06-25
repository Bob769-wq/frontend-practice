import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="onSubmit()"
      class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl space-y-4"
    >
      <label class="block text-sm font-medium text-gray-700">
        Name:
        <input
          type="text"
          formControlName="name"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <p class="text-sm text-gray-600">
        Value: {{ form.controls.name.value }}
      </p>

      <div class="flex gap-4">
        <button
          type="submit"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
        <button
          type="button"
          (click)="updateName()"
          class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          Update Name
        </button>
        <!-- button寫上type="button"才能讓他做其他事情不然就被抓去submit -->
      </div>
    </form>
  `
})
export class NameEditorComponent {
  form = new FormGroup({
    name: new FormControl('')
  });

  updateName() {
    this.form.controls.name.setValue('Harry');
  }

  onSubmit() {
    console.log('Submitted value:', this.form.value.name);
  }
}
