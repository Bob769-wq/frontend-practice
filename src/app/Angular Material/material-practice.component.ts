import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from "@angular/material/card"

@Component({
    selector:'app-material-practice',
    standalone:true,
    imports:[CommonModule, MatButtonModule, MatToolbarModule, MatCardModule],
    template:`
    <mat-toolbar color="primary" class="flex justify-between">
    <span>toolbox</span>
    <button mat-button (click)="increment()">
        click({{count()}})
    </button>
    </mat-toolbar>

    <mat-card class="max-w-md mx-auto mt-6">
        <mat-card-title>
            Message
        </mat-card-title>
        <mat-card-content>
            <p>Status:{{status()}}</p>
        </mat-card-content>
        <mat-card-actions>
            <button mat-raised-button color="primary" 
            (click)="toggleStatus()">Switch</button>
        </mat-card-actions>
    </mat-card>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        @for (product of products(); track product.id) {
            <mat-card>
            <mat-card-title>{{product.name}}</mat-card-title>
            <mat-card-content>
                <p>{{product.description}}</p>
            </mat-card-content>
            <mat-card-actions>
                <button mat-button color="primary"
                (click)="addToCart(product.id)">
                    Add
                </button>
            </mat-card-actions>
            </mat-card>
        }
    </div>

      @if (cart().length > 0) {
        <div class="mt-6 p-4">
            <p>You've added: {{cart()}}</p>
        </div>
      }
    `
})
export class MaterialPracticeComponent {
    count =signal(0);
    increment () {
        this.count.update(c=>c+1);
    }
    status = signal('loading')
    toggleStatus() {
        this.status.update(s=>(s === 'loading' ? 'finished' : 'loading'));
    }

    products = signal([
        {id:'dinner-choice-1', name:'apple', description:'sweet'},
        {id:'dinner-choice-2', name:'lemon', description:'sour'},
        {id:'dinner-choice-3', name:'pasta', description:'delicious'},
    ]);

    cart = signal<string[]>([]);

    addToCart(productId:string) {
        const current = this.cart();
        if(!current.includes(productId)){
            this.cart.set([...current, productId]);
        }
    }
}