import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.getCheckInData()
   }

  getCheckInData=()=>{
    this.myapi.viewcheckIn().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataCheck = resp;
        console.log(resp)
      }
      )
  }
  checkOut=(id:any)=>{
    let data = {
      "id":id,
      "logout_security_code":localStorage.getItem("security_code")
    }
    this.myapi.checkOut(data).subscribe()
    alert("Checked Out")
    this.getCheckInData()
    
  }

 
   
    displayedColumns: string[] = ['empcode', 'login_time', 'update'];
    dataCheck :any =[]



  ngOnInit(): void {
  }

}
