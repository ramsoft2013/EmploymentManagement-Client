import { Observable } from "rxjs";
import { EmployeeService } from './../employee.service';
import { Employee } from "./../employee";
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  employee: Employee = new Employee();
  message:any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  loginData() {
   this.employeeService.login(this.employee).subscribe(data => {
      console.log("re11sponse data :: ",data);
      this.message=data;
      sessionStorage.setItem('token', this.message);
    });  

  /* return this.employeeService.login(this.employee).pipe(
     map(userData=>{
      
       let tokenStr='Bearer '+userData;
       sessionStorage.setItem('token',tokenStr);
       return userData;
     }

     )
   ); */
       
  }
  
  getToken(){
   return sessionStorage.getItem('token');

  }
}
