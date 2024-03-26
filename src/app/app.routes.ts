import { Routes } from '@angular/router';
import { Component } from '@angular/core';

import { ProductsPageComponent } from './components/products-page/products-page.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { DetailsComponent } from './components/details/details/details.component';
import { usergardGuard } from './components/guard/usergard.guard';



export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"sign up",component:SignupComponent,title:"sign up"},
    {path:"login",component:LoginComponent,title:"login"},
    {path:"category" ,component:ProductsPageComponent},
    {path:"category/:category",component:ProductsPageComponent},
    {path:"category/:category/:brand",component:ProductsPageComponent},
    {path:"brand/:brand",component:ProductsPageComponent,title:"brand"},
    {path:"product/:name",component:DetailsComponent},
    {path:"cart",component:CartComponent ,canActivate:[usergardGuard]},
    {path:"**",component:NotFoundComponent}

];
