import { CommonModule, JsonPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../Services/userService/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgClass,RouterOutlet,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
loginform:FormGroup;
islogin!:boolean
constructor(private formbuilder:FormBuilder ,private userservices:UserService){
this.loginform=new FormGroup({
  Email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required])
})
console.log(this.loginform.value);


}
  ngOnInit(): void {
    this.islogin=this.userservices.userstate
  }
get email(){
  return this.loginform.get('Email');
}
get password(){
  return this.loginform.get('password');
}
save(form:FormGroup){
  console.log((form.value));
  this.login();
}

login(){
this.userservices.login(String(this.email),String(this.password))
this.islogin=this.userservices.userstate
}

logout(){
  this.userservices.logout()
  this.islogin=this.userservices.userstate
}

}
