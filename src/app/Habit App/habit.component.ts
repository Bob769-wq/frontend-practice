import { Component,inject,computed,signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HabitService } from "./habit.service";

@Component ({
    standalone:true,
    selector:'app-habit',
    imports:[CommonModule],
    template:`
    <div class="p-4 border rounded max-w-sm mx-auto space-y-2">
        <h2>All</h2>
        <p>{{total()}}</p>
        <p>Completion: {{done()}}</p>
        <p>Rate: {{(rate() * 100).toFixed(2)}}%</p>
    </div>
    `
})

export class HabitComponent {
    readonly service =inject(HabitService);

    total = this.service.totalCount;
    done = this.service.completedCount;
    rate = this.service.completionRate;
}