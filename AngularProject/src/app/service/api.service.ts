import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public APIUrl:string="https://localhost:44324/api/product/";

  constructor(private http:HttpClient) { }

  getProduct(){
    // return this.http.get<any>("http://localhost:3000/app/products")
    return this.http.get<any>(this.APIUrl+"getallproducts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postProduct(data : any){
    // return this.http.post<any>("http://localhost:3000/app/products/add",data)
    // return this.http.post<any>(`${this.APIUrl}getallproducts`,data)
    return this.http.post<any>(this.APIUrl+"addproduct",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }



  updateProduct(data : any){
    // return this.http.put<any>("http://localhost:3000/app/products/update/"+id,data)
    return this.http.put<any>(this.APIUrl+"updateproduct",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProduct(id : number){
    return this.http.delete<any>(this.APIUrl+"deleteproduct/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
