import { Component,inject } from "@angular/core";
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

        <app-habit-list></app-habit-list>

        <p>Total: {{total()}}</p>
        <p>Completion: {{done()}}</p>
        <p>Rate: {{(rate()).toFixed(2)}}%</p>
    </div>
    `
})

export class HabitComponent {
    readonly service =inject(HabitService);

    total = this.service.totalCount;
    done = this.service.completedCount;
    rate = this.service.completionRate;
}