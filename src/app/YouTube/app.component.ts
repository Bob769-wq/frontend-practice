import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HeaderComponent } from "./header.component";

@Component({
    selector:'app-root',
    standalone:true,
    imports: [CommonModule, HeaderComponent],
    template:`
    <app-header/>
    `
})
export class AppComponent {

}