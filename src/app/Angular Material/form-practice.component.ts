import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule, FormControl } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector:'app-input-example',
    standalone:true,
    imports:[
        MatCardModule, 
        MatFormFieldModule, 
        MatInputModule, 
        FormsModule, 
        ReactiveFormsModule,
        MatSelectModule],
    template:`
    <mat-card class="max-w-md mx-auto mt-6">
        <mat-card-title>Input</mat-card-title>
        <mat-card-content class="space-y-4">
            <mat-form-field  class="w-full">
                <mat-label>Name</mat-label>
                <input matInput placeholder="名字啦" [(ngModel)]="nameValue">
                <mat-hint>type your name</mat-hint>
            </mat-form-field>

            <p class="text-gray-600">Hello, {{nameValue}}!</p>
        </mat-card-content>
    </mat-card>

    <mat-card class="max-w-md mx-auto mt-6">
        <mat-card-title>Reactive Form Input</mat-card-title>
        <mat-form-field class="w-full">
            <mat-label>抽iPhone</mat-label>
            <input matInput placeholder="type your name" [formControl]="nameControl">
        </mat-form-field>

        <p class="text-gray-600">Hello, {{nameControl.value}}</p>
    </mat-card>

    <mat-card class="max-w-md mx-auto mt-6 space-y-4">
        <mat-card-title>Choose your favorite</mat-card-title>
        
        <mat-form-field appearance="fill" class="w-full">
            <mat-label>Fruit</mat-label>
            <mat-select [formControl]="fruitControl">
                @for (fruit of fruits; track fruit.value) {
                    <mat-option [value]="fruit.value">
                        {{fruit.label}}
                    </mat-option>
                }
            </mat-select>
        </mat-form-field>

        @if (fruitControl.value) {
            <p>You choose: <strong>{{fruitControl.value}}</strong></p>
        }
    </mat-card>
    `
})
export class InputExampleComponent {
    nameValue = '';
    nameControl = new FormControl('');

    fruitControl = new FormControl('');

    fruits = [
        {value:'apple', label:'🍎'},
        {value:'banana', label:'🍌'},
        {value:'lemon', label:'🍋'},
        {value:'mango', label:'🥭'},

    ]
}