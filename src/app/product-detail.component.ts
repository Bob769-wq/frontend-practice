import { CommonModule } from "@angular/common";
import { Component, computed, input, inject } from "@angular/core";
import { ProductService } from "./product.service";

@Component({
    selector:'app-product-detail',
    standalone:true,
    imports:[CommonModule],
    template:`
    <div class="border p-4 rounded bg-gray-100">
        <h2 class="text-xl font-semibold">Product Detail</h2>
        <p class="mt-2">Selected Product ID: <strong>{{id()}}</strong></p>
    </div>
    `
})

export class ProductDetailComponent {
    private readonly productService = inject(ProductService);

    readonly id = input<number>();

    readonly product = computed(()=> {
        const id =this.id();
        return id !== undefined? this.productService.getProductById(id): undefined;
    });
}