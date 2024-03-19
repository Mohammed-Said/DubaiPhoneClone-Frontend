import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { SignupComponent } from './companent/sign up/signup/signup.component';
import { LoginComponent } from './companent/login/login/login.component';

export const routes: Routes = [
    
    {path:"sign up",component:SignupComponent,title:"sign up"},
    {path:"login",component:LoginComponent,title:"sign up"},
];
