import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent implements OnInit {

  constructor(private myapi:ApiService,private myRouter:Router) { }

  email=""
password=""

readValues=()=>{
  let data={
    "email":this.email,
    "password":this.password
  }
  console.log(data)
  this.myapi.securitylogin(data).subscribe(
    (resp:any)=>{
      if (resp.length>0) {
   
        localStorage.setItem("security_code",resp[0].id)
        localStorage.setItem("security_name",resp[0].name)
        console.log(localStorage.getItem("security_code"));
this.myRouter.navigate(["/checkIn"])
       
      } else {

        alert("Invalid credentials")
       
      }

    }
  )
}

  ngOnInit(): void {
  }

}
