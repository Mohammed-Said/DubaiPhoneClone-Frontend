import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IGetBrand } from '../../models/brand/iget-brand';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private URL!:string
  constructor(private httpClient:HttpClient) { 
    this.URL=environment.serverURL+"/api/category"
  }
  GetAllBrands():Observable<IGetBrand[]>{
    return this.httpClient.get<IGetBrand[]>(this.URL)
  }
}
