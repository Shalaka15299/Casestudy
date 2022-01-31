import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../view-user/IUser';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  public avail:boolean=false;
  public message:string="";
  private base_url="http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpclient:HttpClient) { }

   getUsers(){
    return this.httpclient.get<any>("http://localhost:3000/app/users/")
    .pipe(map((res:any)=>{return res;}))
  }

  getProducts(){
    return this.httpclient.get<any>("http://localhost:3000/app/products/")
    .pipe(map((res:any)=>{return res;}))
  }

  saveProduct(data:any){
    console.log("data:"+data);
   return this.httpclient.post("http://localhost:3000/app/products/add",data);
  }

  deleteProduct(id:string){
    return this.httpclient.delete<any>("http://localhost:3000/app/products/delete/"+id)
    .pipe(map((res:any)=>{return res;}))
  }

  // getUsers():Observable<IUser []>{
  //   return this.httpclient.get<IUser[]>(this.base_url+"/viewuser");
  // }
  // viewUser(id:string):Observable<IUser []>{
  //   return this.httpclient.get<IUser[]>(this.base_url + "/users" +id);
  // }

  // deleteUser(id:string):Observable<IUser []>{
  //   return this.httpclient.delete<IUser[]>(this.base_url + "/deleteuser:" +id);
  // }
  // check(){
  //   return this.httpclient.get(this.base_url +"/check",{ headers:this.headers});
  // }


}
