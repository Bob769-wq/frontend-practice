import { Component,inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HabitService } from "./habit.service";
import { HabitListComponent } from "./habitlist.component";

@Component ({
    standalone:true,
    selector:'app-habit',
    imports: [CommonModule, HabitListComponent],
    template:`
    <div class="p-4 border rounded max-w-sm mx-auto space-y-2">
        <h2>All Habits</h2>

        <div class="flex gap-2">
            <input 
            class="border px-2 py-1 flex-1 rounded"
            [value]="newHabitTitle()"
            (input)="newHabitTitle.set($any($event.target).value)"
            placeholder="Add a new habit">
            <button
            class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            (click)="add()">Add</button>
        </div>

        <app-habit-list></app-habit-list>

        <p>Total: {{total()}}</p>
        <p>Completion: {{done()}}</p>
        <p>Rate: {{(rate()).toFixed(2)}}%</p>
    </div>
    `
})

export class HabitComponent {
    readonly service =inject(HabitService);

    add() {
        const title = this.newHabitTitle().trim();
        if(title) {
            this.service.addHabit(title);
            this.newHabitTitle.set('');
        }
    }
    newHabitTitle = signal('');
    total = this.service.totalCount;
    done = this.service.completedCount;
    rate = this.service.completionRate;
}