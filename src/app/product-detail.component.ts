import { CommonModule } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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
    private route = inject(ActivatedRoute);
    readonly id = computed(()=>this.route.snapshot.paramMap.get('id'));
}