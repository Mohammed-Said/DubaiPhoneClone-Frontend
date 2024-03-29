import { Routes } from '@angular/router';
import { Component } from '@angular/core';

import { ProductsPageComponent } from './components/products-page/products-page.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/shared/details/details.component';

export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"sign up",component:SignupComponent,title:"sign up"},
    {path:"login",component:LoginComponent,title:"login"},
    {path:"category" ,component:ProductsPageComponent,children:[
      {path:":category",component:ProductsPageComponent},
      {path:":category/:brand",component:ProductsPageComponent},
    ]},
    {path:"brand",component:ProductsPageComponent,children:[
      {path:":brand",component:ProductsPageComponent},
    ]},
    {path:"product/:name",component:DetailsComponent},
    {path:"not-found",component:NotFoundComponent},
    {path:"**",redirectTo:"not-found"}
];
