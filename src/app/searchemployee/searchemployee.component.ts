import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }


empcode=""
readvalues=()=>{
  let data={
    "empcode":this.empcode
  }
  console.log(data)
  this.myapi.empSearch(data).subscribe(
    (res)=>{
      this.empSearch=res
      this.empcode=""
    }
  )
}
empUpdate=()=>{
  this.myapi.empUpdate(this.empSearch[0]).subscribe(
    (res)=>{
      alert("succesfully updated")
    }
  )
}
empSearch:any=[]
  ngOnInit(): void {
  }

}
