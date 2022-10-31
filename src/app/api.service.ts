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

  empLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/emplogin",data)
  }

  securitylogin=(data:any)=>{
    return this.http.post("http://localhost:8080/loginsecurity",data)
  }

  addsecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",data)
  }

  viewsecurity=()=>{
    return this.http.get("http://localhost:8080/viewsecurity")
  }

  deletesecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/deletesecurity",data)
  }

  searchsecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/searchsecurity",data)
  }

  updatesecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/editsecurity",data)
  }

  applyLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/addLeave",data)
  }

  checkIn=(data:any)=>{
    return this.http.post("http://localhost:8080/checkIn",data)
  }

  checkOut=(data:any)=>{
    return this.http.post("http://localhost:8080/checkOut",data)
  }

  viewcheckIn=()=>{
    return this.http.get("http://localhost:8080/viewCheckIn")
  }

  viewAllLogs=()=>{
    return this.http.get("http://localhost:8080/viewAllLog")
  }

  viewLogById=(data:any)=>{
    return this.http.post("http://localhost:8080/viewLogById",data)
  }

  viewLeaveById=(data:any)=>{
    return this.http.post("http://localhost:8080/leaveappli",data)
  }
}
