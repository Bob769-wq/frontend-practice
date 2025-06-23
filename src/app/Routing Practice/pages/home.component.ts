import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    standalone:true,
    selector:'app-home',
    imports:[CommonModule,RouterModule],
    template:`
    <p>This is HomePage!</p>
    <a routerLink="/profile" class="text-blue-600 hover:underline">
        Go to Profile Page
    </a>
    `
})

export class HomeComponent {
    
}