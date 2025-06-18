import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductService } from "./product.service";



@Component ({
    selector:'app-shop',
    standalone:true,
    imports:[RouterModule, CommonModule],
    template:`
    <h1 class="text-2xl font-bold mb-4">🛍️ Shop</h1>
    <div class="flex gap-8">
        <section class="w-1/2">
            <h2 class="text-xl mb-2">Product List</h2>
            <ul class="list-disc ps-6">
                @for (product of products(); track product.id) {
                    <li>
                        <a [routerLink]="['/shop', 'detail', product.id]"
                        class="text-blue-600 hover:underline">
                            {{product.name}}
                        </a>
                    </li>
                }
            </ul>
        </section>
        <section class="w-1/2">
            <router-outlet></router-outlet>
        </section>
    </div>
    `
})

export class ShopComponent{
   private readonly productService = inject(ProductService);
   readonly products = this.productService.products;
} 