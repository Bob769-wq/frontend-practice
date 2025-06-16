import { Component,signal,computed,inject } from "@angular/core";
import {Router,ActivatedRoute, RouterModule} from '@angular/router';
import { CommonModule } from "@angular/common";

@Component ({
    selector:'app-search',
    standalone:true,
    imports:[CommonModule,RouterModule],
    template:`
    <h2>Search Page</h2>

    <label>
        Keyword:
        <input type="text" [value]="keywordInput()" 
        (input)="keywordInput.set($any($event.target).value)">
    </label>
    <br>
    <label>
        Page:
        <input type="number" [value]="pageInput()"
        (input)="keywordInput.set($any($event.target).value)">
    </label>
    <br>
    
    `
})

export class SearchComponent {
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    keywordInput = signal('');
    pageInput =signal(1);
}