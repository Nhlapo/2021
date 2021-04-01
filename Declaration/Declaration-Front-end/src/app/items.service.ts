import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  _Url = "http://localhost:8080/";
  declareItems = "http://172.17.163.193:8080/addItems";

  constructor(private http: HttpClient) { }
/*
  declare(declare_items) {
    return this.http.post<any>(this._Url + "declare_items", { declare_items })
  } */

  public DeclareItem(item)
  {
    return this.http.post<any>(this.declareItems,item, {});
  }


  declare(declare_items) {
    return this.http.post<any>(this.declareItems + "declare_items", { declare_items })
  } 

  admin_Login(admin_id, admin_pass) {
    return this.http.post<any>(this._Url + "Admin_login", { admin_id, admin_pass })
  }

  // get_declared_Item(){
  //   return this.http.get<any>(this._Url + "declared_items")
  // }

  get_declared_Item(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
  }

  // get_item_cat(){
  //   return this.http.get<any>(this._Url + "cat_items")
  // }

  get_item_cat(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
  }


}
