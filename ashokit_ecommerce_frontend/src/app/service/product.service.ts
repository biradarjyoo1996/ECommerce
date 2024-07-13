import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { map, Observable } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl="http://localhost:8093/api/products"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>
  {
    return this.httpClient
               .get<GetResponse>(this.baseUrl)
               .pipe(map(response =>response._embedded.products));
  }
}

    interface GetResponse
    {
      _embedded: {
          products: Product[];

      }
    }
  

