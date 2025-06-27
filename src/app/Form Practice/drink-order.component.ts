import { Component, signal } from "@angular/core";

@Component({
    selector:'app-drink-order',
    standalone:true,
    template:`
    <div class="p-4 border rounded max-w-sm mx-auto mt-6 bg-yellow-50">
        <h2 class="text-xl font-bold mb-4">Emulator</h2>
        <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4" (click)="orderDrink()">
            Order
        </button>
        @if(message()) {
            <div class="text-lg text-gray-700">
                {{message()}}
            </div>
        }
    </div>
    `
})
export class DrinkOrderComponent {
    message = signal('press the button to order!')

    buyDrink(drinkName: string):Promise<string>{
        this.message.set(`You ordered ${drinkName}, please wait...`);
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve(`${drinkName} is ready!`);
            }, 3000);
        });
    }
    async orderDrink() {
        const result = await this.buyDrink('milk');
        this.message.set(result + 'Enjoy~');
    }
}