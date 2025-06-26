import { Component, OnInit } from "@angular/core";
import { Actor } from "./actor";
import { FormsModule } from "@angular/forms";

@Component ({
    selector:'app-actor-form',
    imports:[FormsModule],
    template:`
    <div class="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white space-y-6">
    <form (ngSubmit)="onSubmit()" #actorForm="ngForm">
    <h2 class="text-2xl font-bold text-center mb-4">Actor Form</h2>
    <div>
        <label for="name">Name</label>
        <input type="text" id="name" required
        [(ngModel)]="model.name" name="name"
        class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
    </div>

    

    <div>
        <label for="skill">Skill</label>
        <select id="skill" required [(ngModel)]="model.skill" name="skill"
        class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            @for(skill of skills; track $index) {
                <option [value]="skill">{{skill}}</option>
            }
        </select>
    </div>


    <div>
        <label for="studio">Studio</label>
        <input type="text" id="studio"
        [(ngModel)]="model.studio" name="studio"
        class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
    </div>

    <button type="button" (click)="newActor();" 
    class="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600">
    New Actor
    </button>
    </form>
    </div>
    `
})

export class ActorFormComponent implements OnInit {
    skills= ['Method Acting', 'Singing', 'Dancing', 'SwordFighting'];
    model!:Actor;
    submitted = false;

    ngOnInit(): void {
        this.model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions')
    }

    onSubmit() {
        this.submitted = true;
    }

    newActor() {
        this.model = new Actor(42, '', '');
        this.submitted = false;
    }
}