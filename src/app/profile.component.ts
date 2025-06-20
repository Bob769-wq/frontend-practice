import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone:true,
    imports:[CommonModule],
    selector:'app-profile',
    template:`
    <h2 class="text-2xl font-bold">🐬Profile🐬</h2>
    <p>Profile Page</p>
    `
})

export class ProfileComponent {}