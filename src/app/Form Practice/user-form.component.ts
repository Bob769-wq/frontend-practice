import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component ({
    selector:'app-user-form',
    standalone:true,
    imports:[CommonModule,FormsModule],
    template:`
    <form #form="ngForm" (ngSubmit)="onSubmit(form)" class="max-w-xl mt-6 mx-auto">
        <label>
            Name:
            <input type="text" name="name" ngModel required class="border p-1 rounded">
        </label>
        <button type="submit" class="ml=2 bg-blue-500 text-white px-3 py-1 rounded">
            Submit
        </button>
    </form>
    @if (submittedName) {
        <p class="mt-4 max-w-xl mx-auto text-green-600">Your name: <strong>{{submittedName}}</strong></p>
    }
    
<!-- 單向綁VS雙向綁 -->

    <form class="max-w-xl mt-6 mx-auto">
        <label>
            Name:
            <input type="text" name="name" [(ngModel)]="name" required
            class="border p-1 rounded">
        </label>

        @if (name) {
            <p class="mt-4 max-w-xl mx-auto text-blue-600">
                You are typing: {{name | uppercase}}
            </p>
        }
    </form>
    `
})

export class UserFormComponent {
    name = '';

    submittedName = '';

    onSubmit(form:NgForm) {
      this.submittedName = form.value.name;
    }
}