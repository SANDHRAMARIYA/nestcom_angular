import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private myapi:ApiService,private myRouter:Router) { }


email=""
password=""

readValues=()=>{
  let data={
    "email":this.email,
    "password":this.password

  }
  console.log(data)
  this.myapi.empLogin(data).subscribe(
    (resp:any)=>{
      if (resp.length>0)
      {
        localStorage.setItem("empcode",resp[0].empcode)
        console.log(localStorage.getItem("empcode"));
        localStorage.setItem("empname",resp[0].name)
        this.myRouter.navigate(["/applyLeave"])
      } else {
        alert("Invalid credentials")
      }
    }
  )
}
  
  ngOnInit(): void {
  }

}
