import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Iproduct } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlApi_product = "http://localhost:3000/products";
  urlApi_new_deshes = "http://localhost:3000/new_dishes";

  constructor(private httpclient:HttpClient) { 
  }

  get_All_Products ():Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(this.urlApi_product)
  }

  get_Top_product_by_order(limit:number):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${this.urlApi_product}?_sort=order&_order=desc&_limit=${limit}`)
  }

  get_New_product(limit:number):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${this.urlApi_new_deshes}?_sort=createAt&_order=desc&_limit=${limit}`)
  }



  


}
