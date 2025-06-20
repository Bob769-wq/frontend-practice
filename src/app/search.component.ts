import { Component,input,computed,inject, signal } from "@angular/core";
import {Router, RouterModule} from '@angular/router';
import { CommonModule } from "@angular/common";

@Component ({
    selector:'app-search',
    standalone:true,
    imports:[CommonModule,RouterModule],
    template:`
    <h2 class="text-xl mb-2">Search Page</h2>
    
    <label>
        Keyword:
        <input type="text" [value]="keywordInput()" 
        (input)="setKeyword($any($event.target).value)">
    </label>
        <br>
    <label>
        Page:
        <input type="number" [value]="pageInput()"
        (input)="setPage($any($event.target).value)">           
    </label>
    <br>
    
    <button (click)="applySearch()">Apply Search</button>
    <p><strong>Current keyword:</strong> {{keyword()}}</p>
    <p><strong>Current page:</strong> {{page()}}</p>

    <ul class="list-disc ps-6">
    @for (item of pagedResults(); track item) {
        <li>{{item}}</li>
    }
    </ul>

    <div class="mt-4">
        <button (click)="prevPage()" class="m-3">Previous</button>
        <button (click)="nextPage()" class="m-3">Next</button>
    </div>
    `
})

export class SearchComponent {
    private router = inject(Router);

    readonly keyword = input<string>('');
    readonly rawPage = input<string>('1');
    readonly page = computed(()=>Number(this.rawPage()) || 1);

    keywordInput = signal(this.keyword());
    pageInput = signal(this.page());

    setKeyword(value: string) {
        this.keywordInput.set(value);
    }

    setPage(value: string) {
        this.pageInput.set(Number(value));
    }
    
    applySearch() {
        this.router.navigate(['/search'], {
            queryParams: {
                keyword: this.keywordInput(),
                page:this.pageInput(),
            },
        });
    }

    readonly allData =['Apple', 'Banana', 'Cherry', 'Durian', 'Eggplant','Fig','Grape']
    
    readonly searchResults = computed (()=>{
        const keyword = this.keyword().toLowerCase();
        return keyword 
        ? this.allData.filter(item=> item.toLowerCase().includes(keyword))
        : this.allData;
    });

    readonly pagedResults = computed(()=>{
        const page = this.page();
        const start =(page -1) * 2;
        return this.searchResults().slice(start, start +2);
    })

    prevPage() {
        const newPage= Math.max(1, this.page()-1);
        this.pageInput.set(newPage);
        this.applySearch();
    }

    nextPage() {
        const newPage = this.page()+1;
        this.pageInput.set(newPage);
        this.applySearch();
    }
}   