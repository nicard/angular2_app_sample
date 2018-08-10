import {Component} from "@angular/core";
import {PhotoComponent} from "../photo/photo.component";
import {Http, Headers} from "@angular/http";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    photo: PhotoComponent = new PhotoComponent();
    http: Http;
    myForm: FormGroup;
    constructor(http: Http, fb:FormBuilder){
        this.http = http;
        this.myForm = fb.group({
            title: ['',Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['',Validators.required],
            description: ['']
        });
    }

    registerPhoto(event){
        event.preventDefault();
        console.log(this.photo);
        let params = {
            titulo: this.photo.title,
            url: this.photo.url,
            descricao: this.photo.description,
        };

        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.post('v1/fotos', JSON.stringify(params), {
            headers: header
        })
        .subscribe(() => {
            console.log('Photo saved.');
        }, error => console.log(error));

    }
}