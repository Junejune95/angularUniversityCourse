import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val={
    email:"hello@gmail.com",
    password:"12456"
  };

  constructor() {


  }

  ngOnInit() {

  }

  login(loginForm:NgForm,submit){
    console.log(loginForm.valid,"<<>>",loginForm.value);
  }

  onEmailChange(email:String){
    console.log(email);
  }
}
