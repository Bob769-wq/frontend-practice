import { Injectable, signal, computed } from "@angular/core";

export interface Habit {
    id: number;
    title: string;
    done: boolean;
}

@Injectable({providedIn:'root'})
export class HabitService {
    private nextId = 4;

    habits= signal<Habit[]>([
        {id:1, title:'read', done: false},
        {id:2, title:'sleep', done: true},
        {id:3, title:'play', done: false}
    ]);

    totalCount = computed(()=>this.habits().length);

    completedCount = computed(()=>
     this.habits().filter(h=>h.done).length
    );

    activeCount = computed(()=> this.habits().filter(h=>!h.done).length);

    completionRate = computed(()=>{
        const total = this.totalCount();
        return total === 0?0:Math.round((this.completedCount() / total) * 100);
    });

    toggleDone(id:number) {
        this.habits.update(habits=>
            habits.map(h=>
                h.id ===id ? {...h, done: !h.done} : h
            )
        )
    }
}