import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private myrouter:Router) { }
  username=""
password=""
readValues=()=>{
  let data={
    "username":this.username,
    "password":this.password

  }
  if(this.username=="admin" && this.password=="12345"){
    this.myrouter.navigate(["/adminDashbord"])
  }
  else{
    alert("in valid")
  }
  console.log(data)
  alert("Sucess")
}

  
  ngOnInit(): void {
  }
}

