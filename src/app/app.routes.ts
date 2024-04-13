import { Routes } from '@angular/router';
import { Component } from '@angular/core';

import { ProductsPageComponent } from './components/products/products-page/products-page.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { LoginComponent } from './components/user/login/login.component';

import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"sign up",component:SignupComponent,title:"sign up"},
    {path:"login",component:LoginComponent,title:"login"},
    {path:"checkout",component:CheckoutComponent},
    {path:"cart",component:CartComponent},
    {path:"category" ,component:ProductsPageComponent,children:[
      {path:":category",component:ProductsPageComponent},
      {path:":category/:brand",component:ProductsPageComponent},
    ]},
    {path:"brand",component:ProductsPageComponent,children:[
      {path:":brand",component:ProductsPageComponent},
    ]},
    {path:"product/:name",component:ProductDetailsComponent},
    {path:"not-found",component:NotFoundComponent},
    {path:"**",redirectTo:"not-found"}
];
