import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';

import { IProduct } from '../../Models/product/iproduct';
import { IPagination } from '../../Models/ipagination';
import { IProductDetails } from '../../Models/product/iproduct-details';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private URL!: string;
  constructor(private httpClient: HttpClient) {
    this.URL = environment.serverURL + '/api/product';
  }

  //Get product
  // getALLProducts(): Observable<IProduct[]> {
  //   return this.httpClient.get<IProduct[]>(this.URL);
  // }
  // getProductsByCategory(id: number): Observable<IProduct[]> {
  //   return this.httpClient.get<IProduct[]>(this.URL + '/cat/' + id);
  // }
  // getProductsByBrand(id: number): Observable<IProduct[]> {
  //   return this.httpClient.get<IProduct[]>(this.URL + '/brand/' + id);
  // }
  // getProductsByBrandAndCategory(
  //   catId: number,
  //   brandId: number
  // ): Observable<IProduct[]> {
  //   return this.httpClient.get<IProduct[]>(`${this.URL}/${catId}/${brandId}`);
  // }

  //////////////////////////////////////////////////////////////////////////
  //Pagination
  getProductsPagination(URLParams:IPagination): Observable<IProduct[]> {
    let params = new HttpParams();

    params=params.append('numOfProductPerPage',URLParams.numOfProductPerPage)
    .append('pageNumber',URLParams.pageNumber);

    if (URLParams.categoryId != undefined)
      params=params.append('categoryId',URLParams.categoryId);
    if (URLParams.brandId != undefined)
      params=params.append('brandId',URLParams.brandId);

    return this.httpClient.get<IProduct[]>(
      `${this.URL}/GetProductPagination`,
      {params:params}
    );
  }
  ////////////////////////////////////////////////////////////
  //OrderBy
  getProductsOrderBy(criteria: string, way: string,URLParams:IPagination): Observable<IProduct[]> {
    let params = new HttpParams();

    params=params.append('numOfProductPerPage',URLParams.numOfProductPerPage)
    .append('pageNumber',URLParams.pageNumber);

    if (URLParams.categoryId != undefined)
      params=params.append('categoryId',URLParams.categoryId);
    if (URLParams.brandId != undefined)
      params=params.append('brandId',URLParams.brandId);

    if (criteria === 'price')
      return this.httpClient.get<IProduct[]>(
        `${this.URL}/OrderByPrice?way=${way}`,{params:params}
      );
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/OrderByName?way=${way}`,{params:params}
    );
  }
  ///////////////////////////////////////////////////////////////////////////
  //filterByPrice
  getProductsFilterByPrice(min: number,max: number,URLParams:IPagination): Observable<IProduct[]> {

    let params = new HttpParams();

    params=params.append('numOfProductPerPage',URLParams.numOfProductPerPage)
    .append('pageNumber',URLParams.pageNumber);

    if (URLParams.categoryId != undefined)
      params=params.append('categoryId',URLParams.categoryId);
    if (URLParams.brandId != undefined)
      params=params.append('brandId',URLParams.brandId);
    return this.httpClient.get<IProduct[]>(`${this.URL}/FilterByPrice?min=${min}&max=${max}`,{params:params});
  }
  //////////////////////////////////////////////////////////////////////////////
  //filterByStock
  getProductsFilterByStock(URLParams:IPagination): Observable<IProduct[]> {

    let params = new HttpParams();

    params=params.append('numOfProductPerPage',URLParams.numOfProductPerPage)
    .append('pageNumber',URLParams.pageNumber);

    if (URLParams.categoryId != undefined)
      params=params.append('categoryId',URLParams.categoryId);
    if (URLParams.brandId != undefined)
      params=params.append('brandId',URLParams.brandId);

    return this.httpClient.get<IProduct[]>(`${this.URL}/FilterByStock`,{params:params});
  }
  //////////////////////////////////////////////////////////////////////////////////////////
  getProductsByName(name: string): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL + '/search/' + name);
  }

  getProductByID(id: number): Observable<IProductDetails> {
    return this.httpClient.get<IProductDetails>(this.URL + '/' + id);
  }
  getProductsCountByCategory(id: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL + '/catCount/' + id);
  }
  getProductsCountByBrand(id: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL + '/catCount/' + id);
  }

}

