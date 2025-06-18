import { computed, Injectable, signal } from "@angular/core";

export interface Product {
    id:number;
    name:string;
    price:number;
    description:string;
}

@Injectable ({providedIn:'root'})
export class ProductService {
    private readonly items =signal<Product[]>([
        {id:1, name:'T-Shirt', price:500, description:'cotton'},
        {id:2, name:'Sneakers', price:2500, description:'sports'},
        {id:3, name:'Backpack', price:1500, description:'travel'},
    ]);

    readonly products = computed(()=>this.items());

    getProductById(id:number): Product | undefined {
        return this.items().find(p=>p.id ===id);
    }
}