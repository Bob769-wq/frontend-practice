import { Component, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component ({
    selector:'app-product-detail',
    standalone:true,
    imports:[CommonModule],
    template:`
    <div class="p-4 border rounded bg-gray-50">
        <h2 class="text-xl font-semibold">Product Details</h2>
        <p>ID: <strong>{{productId()}}</strong></p>
    </div>
    `
})

export class ProductDetailComponent {
    private route = inject(ActivatedRoute);

    private paramId = signal<string | null>(null);

    readonly productId = signal('');

    constructor() {
    this.route.paramMap.subscribe(params => {
      this.paramId.set(params.get('id'));
      this.productId.set(this.paramId() ?? '');
    });
  }
}