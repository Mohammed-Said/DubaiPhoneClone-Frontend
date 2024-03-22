import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IGetCategory } from '../../models/category/iget-category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private URL!:string
    constructor(private httpClient:HttpClient) { 
      this.URL=environment.serverURL+"/api/category"
    }
    GetAllCategories():Observable<IGetCategory[]>{
      return this.httpClient.get<IGetCategory[]>(this.URL)
    }
}
