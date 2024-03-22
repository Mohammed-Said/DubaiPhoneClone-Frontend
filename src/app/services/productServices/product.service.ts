import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetALLProduct } from '../../models/product/iget-allproduct';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private URL!:string
  constructor(private httpClient:HttpClient) {
    this.URL=environment.serverURL+"/api/product"
   }
   getALLProducts():Observable<IGetALLProduct[]>{
    return this.httpClient.get<IGetALLProduct[]>(this.URL)
   }
   getProductsByCategory(id:number):Observable<IGetALLProduct[]>{
    return this.httpClient.get<IGetALLProduct[]>(this.URL+"/cat/"+id)
   }
   getProductsByBrand(id:number):Observable<IGetALLProduct[]>{
    return this.httpClient.get<IGetALLProduct[]>(this.URL+"/brand/"+id)
   }
   getProductsByBrandAndCategory(catId:number,brandId:number):Observable<IGetALLProduct[]>{
    return this.httpClient.get<IGetALLProduct[]>(`${this.URL}/${catId}/${brandId}`)
   }
   getProductsByname(name:string):Observable<IGetALLProduct[]>{
    return this.httpClient.get<IGetALLProduct[]>(this.URL+"/search/"+name)
   }
   getProductsWithPagination(numOfProductPerPage:number,pageNumber:number):Observable<IGetALLProduct[]>{
    return this.httpClient.get<IGetALLProduct[]>(`${this.URL}/pages?numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`)
   }
   getProductByID(id:number):Observable<IGetALLProduct[]>{
    return this.httpClient.get<IGetALLProduct[]>(this.URL+"/"+id)
   }
   getProductsCountByCategory(id:number):Observable<IGetALLProduct[]>{
    return this.httpClient.get<IGetALLProduct[]>(this.URL+"/catCount/"+id)
   }
   getProductsCountByBrand(id:number):Observable<IGetALLProduct[]>{
    return this.httpClient.get<IGetALLProduct[]>(this.URL+"/catCount/"+id)
   }
}
