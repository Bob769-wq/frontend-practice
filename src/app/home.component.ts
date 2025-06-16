import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone:true,
    selector:'app-home',
    imports:[CommonModule],
    template:`
    <p>This is HomePage!</p>
    `
})

export class HomeComponent {
    
}