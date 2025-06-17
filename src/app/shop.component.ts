import { Component } from "@angular/core";
import {  RouterModule } from "@angular/router";

@Component ({
    selector:'app-shop',
    standalone:true,
    imports:[RouterModule],
    template:`
    <h1 class="text-2xl font-bold mb-4">🛍️ Shop Page</h1>
    <div class="flex gap-6">
        <section class="w-1/2">
            <router-outlet></router-outlet>
        </section>
        <section class="w-1/2">
            <router-outlet name="detail"></router-outlet>
        </section>
    </div>
    `,
})

export class ShopComponent {}