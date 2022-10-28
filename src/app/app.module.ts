import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

const approutes:Routes=[
  {
    path:"",component:AdminLoginComponent
  },
  {
    path:"adminDashbord",component:AdmindashboardComponent
  },
  {
    path:"addEmp",component:AddEmployeeComponent
  },
  {
    path:"emp",component:EmployeeLoginComponent
  }
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminNavbarComponent,
    AdmindashboardComponent,
    AddEmployeeComponent,
    NavbarComponent,
    EmpViewComponent,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  RouterModule.forRoot(approutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
