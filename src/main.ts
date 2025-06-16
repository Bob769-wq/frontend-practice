import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TodoAppComponent } from './app/Todo App/todo-app.component';
import { HabitComponent } from './app/Habit App/habit.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
