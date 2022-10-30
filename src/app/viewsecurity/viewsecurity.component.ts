import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsecurity',
  templateUrl: './viewsecurity.component.html',
  styleUrls: ['./viewsecurity.component.css']
})
export class ViewsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.viewsecurity().subscribe(
      (data)=>{
        this.securityData=data
      }
    )
  }
 
 
  deleteSec=(security_code:any)=>{
  let data={
    "security_code":security_code
  }
  this.myapi.deletesecurity(data).subscribe(
    (response)=>{
      alert ("Deleted Successfully")
    }
  )
 
  this.fetchData()
 
  }
 
  securityData:any=[]

  ngOnInit(): void {
  }

}
