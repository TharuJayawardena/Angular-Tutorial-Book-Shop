import { Component, OnInit } from '@angular/core';
import {LoginForm} from "../../types/auth";

import { getAuth} from "firebase/auth";
import { AuthService } from '../auth.service';


const auth = getAuth();
@Component({
  selector: 'app-logn',
  templateUrl: './logn.component.html',
  styleUrls: ['./logn.component.css']
})
export class LognComponent implements OnInit {

  form:  LoginForm = {
    email: '',
    password: ''
  };
  myForm: any;



  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {

    this.authService.login(this.form);
  }


  isLoading() {
    return this.authService.isLoading;
  }

}

