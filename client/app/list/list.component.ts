import {Component} from "@angular/core";
import {Http} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: './list.component.html'
})
export class ListComponent {
    photos: Object[] = [];

    constructor(http: Http){
        http
            .get('v1/fotos')
            .map(res => res.json())
            .subscribe(res => {
                this.photos = res;
            }, error => console.log(error));

    }
}