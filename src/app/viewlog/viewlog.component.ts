import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlog',
  templateUrl: './viewlog.component.html',
  styleUrls: ['./viewlog.component.css']
})
export class ViewlogComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.getLogData()
   }


  getLogData=()=>{
    this.myapi.viewAllLogs().subscribe(
      (resp) =>{
        console.log("Entered")
        this.logData = resp;
        console.log(resp)
      }
      )
  }

 
   
    displayedColumns: string[] = ['emp_name', 'login_time', 'login_sec_name', 'logout_time','logout_sec_name'];
    logData :any =[]
  ngOnInit(): void {
  }

}
