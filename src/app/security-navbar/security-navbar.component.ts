import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-navbar',
  templateUrl: './security-navbar.component.html',
  styleUrls: ['./security-navbar.component.css']
})
export class SecurityNavbarComponent implements OnInit {

  constructor(private myRouter:Router) { }


  logout=()=>{
    localStorage.clear
    this.myRouter.navigate(["/sec"])
  }
  ngOnInit(): void {
  }

}
