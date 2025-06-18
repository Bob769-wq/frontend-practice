import { CommonModule } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "./product.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs";

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
    private readonly route = inject(ActivatedRoute);
    private readonly productService = inject(ProductService);

    readonly productId = toSignal(
        this.route.paramMap.pipe(map(p=>Number(p.get('id'))))
    );

    readonly product = computed(()=> {
        const id =this.productId();
        return id !== undefined? this.productService.getProductById(id): undefined;
    });
}