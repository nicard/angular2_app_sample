import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PhotoModule} from './photo/photo.module';
import {PanelModule} from './panel/panel.module';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {RegisterComponent} from './register/register.component';
import {ListComponent} from "./list/list.component";
import {routing} from './app.routes';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    imports: [ BrowserModule, PhotoModule, HttpModule, PanelModule, routing, FormsModule, ReactiveFormsModule],
    declarations: [ AppComponent, RegisterComponent, ListComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule{}