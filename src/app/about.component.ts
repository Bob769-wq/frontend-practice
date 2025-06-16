import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component ({
    standalone:true,
    selector:'app-about',
    imports:[CommonModule],
    template:`
    <p>This is the About page.</p>
    `
})

export class AboutComponent {
    
}