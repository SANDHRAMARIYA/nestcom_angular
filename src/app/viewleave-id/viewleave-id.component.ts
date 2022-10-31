import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewleave-id',
  templateUrl: './viewleave-id.component.html',
  styleUrls: ['./viewleave-id.component.css']
})
export class ViewleaveIdComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.getLeaveData()
  }

  getLeaveData=()=>{
    let data={
     "empcode":localStorage.getItem("empcode")
    }
    this.myapi.viewLeaveById(data).subscribe(
     (res)=>{
       console.log("Entered")
       this.leaveData=res;
       console.log(res)
     }
    )
   }
 
 
     
     displayedColumns: string[] = ['name','date','reason','applydate','type','status'];

  leaveData:any=[]


  ngOnInit(): void {
  }

}
