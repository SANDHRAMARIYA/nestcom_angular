import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  empcode=""

checkIn=()=>{
let data={
  "empcode":this.empcode,
  "login_security_code":localStorage.getItem("security_code")
}
console.log(data)
this.myapi.checkIn(data).subscribe()
this.empcode=""
}


  ngOnInit(): void {
  }

}
