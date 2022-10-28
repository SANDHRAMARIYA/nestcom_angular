import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  empcode=""
  name=""
  dob=""
  doj=""
  address=""
  phnum=""
  designation=""
  email=""
  password=""


  readvalues=()=>{
    let data={
      "empcode":this.empcode,
      "name":this.name,
      "dob":this.dob,
      "doj":this.doj,
      "address":this.address,
      "phnum":this.phnum,
      "designation":this.designation,
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.empAdd(data).subscribe(
      (response)=>{
        alert("Data Added")
      }
    )
  }
  ngOnInit(): void {
  }

}
