import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgClass,RouterOutlet,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

signform:FormGroup;

constructor(formbilder:FormBuilder){
  this.signform=new FormGroup({
    Username:new FormControl("",[Validators.required]),
    Email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })
  console.log(this.signform.value);
  
}
get Username(){
  return this.signform.get('Username');
}
get Email(){
  return this.signform.get('Email');
}
get password(){
  return this.signform.get('password');
}
save(form:FormGroup){
  console.log(form.value);
  
}
}
