import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
interface User {
    id: number;
    name: string;
}

@Component ({
    selector:'app-user-list',
    standalone:true,
    imports:[CommonModule,RouterModule],
    template:`
    <h2 class="text-xl mb-2">User List</h2>
    <ul class="list-disc ps-6">
        @for (user of users(); track user.id) {
            <li>
                <a [routerLink]="['/users', user.id]"
                class="text-blue-600 hover:underline">{{user.name}}</a>
            </li>
        }
    </ul>
    `
})

export class UserListComponent {
    readonly users = signal<User[]>([
        {id:1, name:'John'},
        {id:2, name:'Mary'},
        {id:3, name:'Bob'}
    ])
}