import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { SignupComponent } from './companent/sign up/signup/signup.component';
import { LoginComponent } from './companent/login/login/login.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"sign up",component:SignupComponent,title:"sign up"},
    {path:"login",component:LoginComponent,title:"login"},
    {path:"category" ,component:ProductsPageComponent},
    {path:"category/:category",component:ProductsPageComponent},
    {path:"category/:category/:brand",component:ProductsPageComponent},
    {path:"brand/:brand",component:ProductsPageComponent,title:"/:brand"},
    {path:"**",component:NotFoundComponent}

];
