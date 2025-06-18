import { CommonModule } from "@angular/common";
import { Component, effect, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-product-detail',
    standalone:true,
    imports:[CommonModule],
    template:`
    <div class="border p-4 rounded bg-gray-100">
        <h2 class="text-xl font-semibold">Product Detail</h2>
        <p class="mt-2">Selected Product ID: <strong>{{productId()}}</strong></p>
    </div>
    `
})

export class ProductDetailComponent {
    private route = inject(ActivatedRoute);
    readonly productId = signal<string | null>(null);

    constructor() {
        effect(()=>{
            this.route.paramMap.subscribe(params=>{
                this.productId.set(params.get('id'));
            });
        });
    }
}