import { CommonModule, JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginform:FormGroup;
constructor(private formbuilder:FormBuilder){
this.loginform=new FormGroup({
  Email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required])
})
console.log(this.loginform.value);


}
get email(){
  return this.loginform.get('Email');
}
get password(){
  return this.loginform.get('password');
}
save(form:FormGroup){
  console.log((form.value));
  
}

}
