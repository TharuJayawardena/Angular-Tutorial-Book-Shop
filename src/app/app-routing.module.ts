import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { CartComponent } from "./cart/cart.component";
import {LognComponent} from "./auth/logn/logn.component";
import {RegisterComponent} from "./auth/register/register.component";



const routes: Routes = [
    { path: '', component: BooksComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: LognComponent},
    { path: 'register', component: RegisterComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
