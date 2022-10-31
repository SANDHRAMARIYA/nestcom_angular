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
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { ViewsecurityComponent } from './viewsecurity/viewsecurity.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { SecurityNavbarComponent } from './security-navbar/security-navbar.component';

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

    path:"viewEmp",component:EmpViewComponent
    },
    {
    path:"emp",component:EmployeeLoginComponent
  },
  {
    path:"sec",component:SecurityLoginComponent
  },
  {
    path:"searchEmp",component:SearchemployeeComponent
  },
  {
    path:"addsec",component:AddsecurityComponent
  },
  {
    path:"viewsec",component:ViewsecurityComponent
  },
  {
    path:"searchsec",component:SearchsecurityComponent
  },
  {
    path:"applyLeave",component:ApplyLeaveComponent
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
    EmployeeLoginComponent,
    SecurityLoginComponent,
    SearchemployeeComponent,
    AddsecurityComponent,
    ViewsecurityComponent,
    SearchsecurityComponent,
    ApplyLeaveComponent,
    EmployeeNavbarComponent,
    SecurityNavbarComponent
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
