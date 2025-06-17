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
    
    <button (click)="applySearch()">Apply Search</button>
    <p>Current keyword from URL: {{currentKeyword()}}</p>
    <p>Current page from URL: {{currentPage()}}</p>
    `
})

export class SearchComponent {
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    keywordInput = signal('');
    pageInput =signal(1);

    currentKeyword = computed(()=>this.route.snapshot.queryParamMap.get('keyword')??'');
    currentPage = computed(()=>Number(this.route.snapshot.queryParamMap.get('page'))||1);

    applySearch() {
        this.router.navigate(['/search'], {
            queryParams: {
                keyword: this.keywordInput(),
                page:this.pageInput(),
            },
        });
    }
}