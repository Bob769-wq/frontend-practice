import { Component, computed, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterType, TodoStoreService } from "./todo.service";



@Component ({
    selector:'app-todo-app',
    standalone:true,
    imports:[CommonModule],
    template:`
    <div class="max-w-xl mx-auto p-6 space-y-4">
    <h1>📋 Todo List</h1>

    <div class="flex gap-2">
    <input 
    class="flex-1 border rounded px-2 py-1"
    [value]="input()" (input)="input.set($any($event.target).value)" 
    placeholder="What needs to be done" />

     <button
    class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
    (click)="add()">Add</button>
    </div>

    <div class="flex gap-2">
        <input class="flex-1 border rounded px-2 py-1"
        [value]="search()"
        (input)="search.set($any($event.target).value)"
        placeholder="Search todos" />
    </div>  
    <div class="space-x-2">     
        <button
        [class.active]="filter() === 'all'"
        class="px-2 py-1 border rounded"
        (click)="setFilter('all')">All</button>
        <button
        [class.active]="filter()==='active'"
        class="px-2 py-1 border rounded"
        (click)="setFilter('active')">Active</button>
        <button
        [class.active]="filter() ==='completed'"
        class="px-2 py-1 border rounded"
        (click)="setFilter('completed')">Completed</button>
    </div>

    <ul>
        @for (todo of visibleTodos(); track todo.id) {
            <li>
                <input type="checkbox" [checked]="todo.done" (change)="toggle(todo.id)" />
                @if(editingId()===todo.id) {
                    <input [value]="todo.title"
                    (input)="editedTitle.set($any($event.target).value)"
                    (keydown.enter)="saveEdit(todo.id)"
                    (keydown.escape)="cancelEdit()"
                    (blur)="saveEdit(todo.id)" />
                } @else {
                    <span [class.done]="todo.done "
                    (dblclick)="startEdit(todo.id, todo.title)"
                    [innerHTML]="highlight(todo.title, search())">
                    {{todo.title}}
                    </span>
                }
                <button (click)="remove(todo.id)" class="text-red-500 hover:text-white hover:bg-red-600 rounded-full font-bold transition" >x</button>
            </li>
        }
    </ul>

    <p>{{remaining()}} remaining</p>
    <button (click)="clearCompleted()">Clear Completed</button>
    </div>
    `,
    styles:`
    .active {
        font-weight: bold;
        text-decoration: underline;
    }
    .done {
        text-decoration:line-through;
        color:gray;
    }
    `
})

export class TodoAppComponent {
    private todoStore = inject(TodoStoreService);

    search = signal('');
    input = signal('');
    filter = this.todoStore.filter;
    editedTitle = signal('');
    editingId = signal<number | null>(null);

    startEdit(id:number, currentTitle:string) {
        this.editingId.set(id);
        this.editedTitle.set(currentTitle)
    }

    saveEdit(id:number) {
        const newTitle = this.editedTitle().trim();
        if(newTitle) {
            this.todoStore.updateTitle(id, newTitle);
        }
        this.editingId.set(null);
    }

    cancelEdit() {
        this.editingId.set(null);
    }

    visibleTodos = computed(()=>{
        const list = this.todoStore.todos();
        const f = this.todoStore.filter();
        const keyword = this.search().toLowerCase();

        let filtered = list;

        if(f=== 'active') return list.filter(t => !t.done);
        if(f === 'completed') return list.filter(t =>t.done);
        if(keyword) {
            filtered = filtered.filter(t=>t.title.toLowerCase().includes(keyword));
        }
        return filtered;
    })
    remaining = computed(()=> this.todoStore.todos().filter(t=>!t.done).length);

    add(){
        const title =this.input().trim();
        if(title) {
            this.todoStore.add(title);
            this.input.set('');
        }
    }

    toggle(id:number){
        this.todoStore.toggle(id);
    }

    remove(id: number) {
        this.todoStore.remove(id);
    }

    clearCompleted() {
        this.todoStore.clearCompleted();
    }

    setFilter(f: FilterType) {
        this.todoStore.setFilter(f);
    }

    highlight(text: string, keyword: string): string{
        if(!keyword) return text;
        const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
        const regex = new RegExp(`(${escapedKeyword})`,'gi');
        return text.replace(regex, `<mark>$1</mark>`);
    }
}