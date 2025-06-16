import { CommonModule } from "@angular/common";
import { Component, inject, computed } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component ({
    standalone:true,
    imports:[CommonModule],
    template:`
    <h2 class="text-xl mb-2">User Detail</h2>
    <p>User ID from route: <strong>{{userId()}}</strong></p>
    `
})

export class UserDetailComponent {
    private route =inject(ActivatedRoute);

    readonly userId = computed(()=>this.route.snapshot.paramMap.get('id'));
}
