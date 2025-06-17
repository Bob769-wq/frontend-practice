import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

interface Product {
    id:number;
    name: string;
}

@Component ({
    selector:'app-product-list',
    standalone:true,
    imports:[CommonModule, RouterModule],
    template:`
    <h2 class="text-xl font-semibold mb-2">Product List</h2>
    <ul class="list-disc ps-6">
        @for (product of products(); track product.id) {
            <li>
             <a [routerLink]="['/shop',{outlets: {primary:['products'], detail:['detail',product.id]}}]"
             class="text-blue-600 hover:underline">
                {{product.name}}
             </a>
            </li>
        }
    </ul>
    `
})

export class ProductListComponent {
    readonly products = signal<Product[]>([
        {id:101, name:'T-shirt'},
        {id:102, name:'Sneakers'},
        {id:103, name:'Backpack'},
    ])
}