import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  empAdd=(data:any)=>{
    return this.http.post("http://localhost:8080/empAdd",data)
  }

  empView=()=>{
    return this.http.get("http://localhost:8080/empView")
  }

  delete=(data:any)=>{
    return this.http.post("http://localhost:8080/delete",data)
  }

  empSearch=(data:any)=>{
    return this.http.post("http://localhost:8080/search",data)
  }

  empUpdate=(data:any)=>{
    return this.http.post("http://localhost:8080/edit",data)
  }
}
