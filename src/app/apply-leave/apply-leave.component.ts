import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  date=""
  reason=""
  applydate=""
  type=""

applyLeave=()=>{
  let data={
    "empcode":localStorage.getItem("empcode"),
    "date":this.date,
    "reason":this.reason,
    "applydate":this.applydate,
    "type":this.type,
  }

  console.log(data)
  this.myapi.applyLeave(data).subscribe();
  alert("applied")
}

  ngOnInit(): void {
  }

}
