import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component ({
    selector:'app-not-found',
    imports:[RouterModule],
    template:`
    <div class="text-center mt-10">
        <h1 class="text-4xl font-bold">404 Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <a routerLink="/" class="text-blue-500 hover:underline">Backto Home page</a>
    </div>
    `,
})

export class NotFoundComponent {}