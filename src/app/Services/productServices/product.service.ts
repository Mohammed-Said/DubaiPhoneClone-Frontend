import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { IProduct } from '../../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL!:string
  constructor(private httpClient:HttpClient) {
    this.URL=environment.serverURL+"/api/product"
   }
   getALLProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.URL)
   }
   getProductsByCategory(id:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.URL+"/cat/"+id)
   }
   getProductsByBrand(id:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.URL+"/brand/"+id)
   }
   getProductsByBrandAndCategory(catId:number,brandId:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${this.URL}/${catId}/${brandId}`)
   }
   getProductsByname(name:string):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.URL+"/search/"+name)
   }
   getProductsWithPagination(numOfProductPerPage:number,pageNumber:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${this.URL}/pages?numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`)
   }
   getProductByID(id:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(this.URL+"/"+id)
   }
   getProductsCountByCategory(id:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.URL+"/catCount/"+id)
   }
   getProductsCountByBrand(id:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.URL+"/catCount/"+id)

   }
}

