import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Declare_Service {
  _Url = "http://localhost:8080/";
  // declareItems = "http://172.17.163.193:8080/addItems";
  // // url_showDeclared = "http://localhost:8080/show";
  // url_declareItems = "http://localhost:8080/itemms";

  constructor(private http: HttpClient) { }
  /*
  declare(declare_items) {
    return this.http.post<any>(this._Url + "declare_items", { declare_items })
  }
   */
  /*
  public DeclareItem(item)
  {
    return this.http.post<any>(this.declareItems,item, {});
  }
  */

  declare(declare_items) {
    return this.http.post<any>(this._Url + "itemms", { declare_items })
  } 

  admin_Login(admin_id, admin_pass) {
    return this.http.post<any>(this._Url + "Admin_login", { admin_id, admin_pass })
  }
  // getItems()
  // {
  //   return this.http.get<any>(this.getItems,{})
  // }

  get_declared_Item(){
   
    return this.http.get<any>(this._Url + "show")
  }

  get_item_cat(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
  }
}
