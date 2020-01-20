import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../../app/core/constants/api-endpoint';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BannersResponse } from '../models/banners-res-model';
import { CategoriesResponse } from '../models/categories-res';
import { ProductsResponse } from '../models/products-res';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartDataService {

  constructor(private http: HttpClient) { }

  private Baseurl = 'http://localhost:3000';
  urlLocation = new Subject();


  getBanners(): Observable<BannersResponse[]> {
    const URL = `${this.Baseurl}${ApiEndPoints.GET_HOME_BANNERS}`;
    return this.http.get<BannersResponse[]>(URL);
  }

  getCategories(): Observable<CategoriesResponse[]> {
    const URL = `${this.Baseurl}${ApiEndPoints.GET_CATEGORIES}`;
    return this.http.get<CategoriesResponse[]>(URL);
  }

  getProducts(): Observable<ProductsResponse[]> {
    const URL = `${this.Baseurl}${ApiEndPoints.GET_PRODUCTS}`;
    return this.http.get<ProductsResponse[]>(URL);
  }


}
