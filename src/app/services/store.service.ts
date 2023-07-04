import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor( private httpClient: HttpClient ) {}

  getAllProducts( limit: string = '12', sort: string = 'desc' ) : Observable<Array<Product>> {

    // Establecemos una peticion HTTP de tipo GET para obtener todos los productos como un Observable
    return this.httpClient.get<Array<Product>>(
      `${ STORE_BASE_URL }/products?sort=${ sort }&limit=${ limit }`
    );
  }

  getAllCategories() : Observable<Array<string>> {

    // Establecemos una peticion HTTP de tipo GET para obtener todas las categorias como un Observable
    return this.httpClient.get<Array<string>>(
      `${ STORE_BASE_URL }/products/categories`
    );
  }

}
