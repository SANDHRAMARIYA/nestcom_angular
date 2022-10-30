import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  security_code=""
  name=""
  doj=""
  email=""
  password=""

  status:boolean=false


  readvalue=()=>{

    let data={
      
  "security_code":this.security_code,
  "name":this.name,
  "doj":this.doj,
  "email":this.email,
  "password":this.password
    }
    console.log(data)
    this.myapi.addsecurity(data).subscribe(
      (resp)=>{
        alert ("successfully added")
  
        this.security_code=""
        this.name=""
        this.doj=""
        this.email=""
        this.password=""
        this.status=true
      }
    )
  }

  ngOnInit(): void {
  }

}
