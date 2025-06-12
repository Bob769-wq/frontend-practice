import {effect, Injectable,signal} from '@angular/core';

export interface Todo {
    id:number;
    title:string;
    done:boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

@Injectable ({providedIn:'root'})
export class TodoStoreService {
    private readonly STORAGEKEY = 'my-todo-list';
    private readonly FILTERKEY = 'my-todo-filter';


   todos = signal<Todo[]>([]);
   filter = signal<FilterType>('all');

   constructor() {
    this.todos.set(this.loadTodoFromStorage());

    const storedFilter = localStorage.getItem(this.FILTERKEY) as FilterType | null;
    if (storedFilter === 'all' || storedFilter === 'active' || storedFilter === 'completed') {
        this.filter.set(storedFilter);
    }

    effect(()=>{
        localStorage.setItem(this.STORAGEKEY,JSON.stringify(this.todos()));
    });

    effect(()=>{
        localStorage.setItem(this.FILTERKEY, this.filter());
    })
   }

   private loadTodoFromStorage(): Todo[] {
    const raw = localStorage.getItem(this.STORAGEKEY);
    return raw ? JSON.parse(raw) as Todo[] : [];
   }

   add(title:string){
    const newTodo: Todo = {
        id:Date.now(),
        title,
        done:false,
    };
    this.todos.update(list=>[...list,newTodo]);
   }

   toggle(id:number){
    this.todos.update(list =>
        list.map(todo=>
            todo.id === id? {...todo,done:!todo.done}:todo
        )
    );
   }

   remove(id:number) {
    this.todos.update(list =>list.filter(todo=>todo.id !==id));
   }

   clearCompleted() {
    this.todos.update(list=>list.filter(todo=>!todo.done));
   }

   setFilter(filter:FilterType) {
    this.filter.set(filter);
   }

   updateTitle(id: number, newTitle: string) {
    this.todos.update(list =>
        list.map(todo=>
            todo.id ===id? {...todo, title: newTitle}:todo
        )
    );
   }
}