import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HabitService } from "./habit.service";

@Component({
    standalone:true,
    selector:"app-habit-list",
    imports:[CommonModule],
    template:`
   <ul>
    @for (habit of habits(); track habit.id) {
        <li>
            <input type="checkbox" 
            [checked]="habit.done"
            (change)="toggle(habit.id)" />
            {{habit.title}}
        </li>
    }
   </ul>
    `,
})

export class HabitListComponent {
    private service = inject(HabitService);

    habits = this.service.habits;

    toggle(id:number) {
        this.service.toggleDone(id);
    }
}