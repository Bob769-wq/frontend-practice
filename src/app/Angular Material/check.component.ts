import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
    selector:'app-checkbox',
    standalone:true,
    imports:[ReactiveFormsModule, MatCardModule, MatCheckboxModule],
    template:`
    <mat-card class="max-w-md mx-auto mt-6 space-y-4">
        <mat-card-title>Choose your favorite - Checkbox</mat-card-title>
        @for (fruit of fruits; track fruit.value) {
            <mat-checkbox [formControl]="fruit.control">
                {{fruit.label}}
            </mat-checkbox>
        }
        <p>Selected: {{ getSelected() }}</p>

    </mat-card>
    `
})
export class CheckComponent {
    fruits = [
        {label:'apple', value:'apple', control: new FormControl(false)}, //value是false
        {label:'banana', value:'banana', control: new FormControl(false)},
        {label:'lemon', value:'lemon', control: new FormControl(false)},
        {label:'mango', value:'mango', control: new FormControl(false)},
    ];

    getSelected() {
        return this.fruits.filter(fruit=>fruit.control.value)
        .map(fruit=>fruit.value)
    }

}