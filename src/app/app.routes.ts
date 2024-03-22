import { Routes } from '@angular/router';
import { Component } from '@angular/core';

import { ProductsPageComponent } from './components/products-page/products-page.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"sign up",component:SignupComponent,title:"sign up"},
    {path:"login",component:LoginComponent,title:"login"},
    {path:"categories" ,component:ProductsPageComponent},
    {path:"categories/:category",component:ProductsPageComponent},
    {path:"categories/:category/:brand",component:ProductsPageComponent},
    {path:"brands/:brand",component:ProductsPageComponent,title:"brand"},
    {path:"**",component:NotFoundComponent}

];
