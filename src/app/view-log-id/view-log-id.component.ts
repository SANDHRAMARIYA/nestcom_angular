import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-log-id',
  templateUrl: './view-log-id.component.html',
  styleUrls: ['./view-log-id.component.css']
})
export class ViewLogIdComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.getLogData()
   }


  getLogData=()=>{
    let data={
     "empcode":localStorage.getItem("empcode")
    }
    this.myapi.viewLogById(data).subscribe(
     (res)=>{
       console.log("Entered")
       this.logData=res;
       console.log(res)
     }
    )
   }
 
  
    
     displayedColumns: string[] = ['emp_name', 'login_time', 'login_sec_name', 'logout_time','logout_sec_name'];
     logData :any =[]
  ngOnInit(): void {
  }

}
