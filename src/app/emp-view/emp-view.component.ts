import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.empView().subscribe(
      (data)=>{
        this.empView=data
      }
    )
  }
  delete=(empcode:any)=>{
    let data={
      "empcode":empcode
    }
    this.myapi.delete(data).subscribe(
      (res)=>{
        alert("deleted")
      }
    )
    this.fetchData()
  }
empView:any=[]
  ngOnInit(): void {
  }

}
