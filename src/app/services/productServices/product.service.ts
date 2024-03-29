import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IProduct } from '../../Models/product/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private URL!: string;
  constructor(private httpClient: HttpClient) {
    this.URL = environment.serverURL + '/api/product';
  }

  //Get product
  getALLProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL);
  }
  getProductsByCategory(id: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL + '/cat/' + id);
  }
  getProductsByBrand(id: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL + '/brand/' + id);
  }
  getProductsByBrandAndCategory(
    catId: number,
    brandId: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.URL}/${catId}/${brandId}`);
  }

  ////////////////////////////////////////////////
  //Pagination

  getProductsPagination(
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/pages?numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByCategoryPagination(
    categoryId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/CategoryPagination?categoryId=${categoryId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByBrandPagination(
    BrandId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/BrandPagination?brandId=${BrandId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByBrandAndCategoryPagination(
    categoryId: number,
    BrandId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/BrandAndCategoryPagination?categoryId=${categoryId}&brandId=${BrandId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }

  ////////////////////////////////////////////////
  //OrderBy
  getProductsOrderBy(
    criteria: string,
    way: string,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    if (criteria === 'price')
      return this.httpClient.get<IProduct[]>(
        `${this.URL}/ProductPaginationOrderByPrice?way=${way}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
      );
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/ProductPaginationOrderByName?way=${way}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByBrandOrderBy(
    criteria: string,
    way: string,
    brandId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    if (criteria === 'price')
      return this.httpClient.get<IProduct[]>(
        `${this.URL}/ProductPaginationByBrandOrderByPrice?way=${way}&brandId=${brandId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
      );
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/ProductPaginationByBrandOrderByName?way=${way}&brandId=${brandId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByCategoryOrderBy(
    criteria: string,
    way: string,
    categoryId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    if (criteria === 'price')
      return this.httpClient.get<IProduct[]>(
        `${this.URL}/ProductPaginationByCategoryOrderByPrice?way=${way}&categoryId=${categoryId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
      );
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/ProductPaginationByCategoryOrderByName?way=${way}&categoryId=${categoryId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByCategoryAndBrandOrderBy(
    criteria: string,
    way: string,
    categoryId: number,
    brandId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    if (criteria === 'price')
      return this.httpClient.get<IProduct[]>(
        `${this.URL}/ProductPaginationByCategoryAndBrandOrderByPrice?way=${way}&categoryId=${categoryId}&brandId=${brandId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
      );
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/ProductPaginationByCategoryAndBrandOrderByName?way=${way}&categoryId=${categoryId}&brandId=${brandId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }

  ////////////////////////////////
  //filterByPrice
  getProductsFilterByPrice(
    min: number,
    max: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/FilterAllByPrice?min=${min}&max=${max}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByBrandFilterByPrice(
    min: number,
    max: number,
    brandId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/FilterBrandByPrice?min=${min}&max=${max}&brandId=${brandId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByCategoryFilterByPrice(
    min: number,
    max: number,
    categoryId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/FilterCategoryByPrice?min=${min}&max=${max}&categoryId=${categoryId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByCategoryAndBrandFilterByPrice(
    min: number,
    max: number,
    categoryId: number,
    brandId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/FilterCategoryAndBrandByPrice?min=${min}&max=${max}&categoryId=${categoryId}&brandId=${brandId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }

  ////////////////////////////////
  //filterByStock
  getProductsFilterByStock(
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/FilterAllByStock?numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByBrandFilterByStock(
    brandId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/FilterBrandByStock?brandId=${brandId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByCategoryFilterByStock(
    categoryId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/FilterCategoryByStock?categoryId=${categoryId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }
  getProductsByCategoryAndBrandFilterByStock(
    categoryId: number,
    brandId: number,
    numOfProductPerPage: number,
    pageNumber: number
  ): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${this.URL}/FilterCategoryAndBrandByStock?categoryId=${categoryId}&brandId=${brandId}&numOfProductPerPage=${numOfProductPerPage}&pageNumber=${pageNumber}`
    );
  }


  /////////////////////////////////
  getProductsByName(name: string): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL + '/search/' + name);
  }

  getProductByID(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.URL + '/' + id);
  }
  getProductsCountByCategory(id: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL + '/catCount/' + id);
  }
  getProductsCountByBrand(id: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URL + '/catCount/' + id);
  }
}
