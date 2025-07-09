import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'viewCount',
    standalone:true
})
export class ViewCountPipe implements PipeTransform {
    transform(views:number):string{
        if(views >= 1000000) {
            return Math.floor(views / 1000000) + '百萬';
        } else if(views>=10000) {
            return Math.floor(views/10000) + '萬';
        } else{
            return views.toLocaleString();
        }     
    }
}