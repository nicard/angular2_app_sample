import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {ListComponent} from "./list/list.component";

const appRoutes: Routes = [
    { path: '', component: ListComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);