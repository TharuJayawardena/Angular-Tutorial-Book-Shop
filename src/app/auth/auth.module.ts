import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LognComponent } from './logn/logn.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LognComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
