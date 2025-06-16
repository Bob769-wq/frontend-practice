import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component ({
    standalone:true,
    imports:[CommonModule],
    template:`
    <p>This is the About page.</p>
    `
})

export class AboutComponent {
    
}