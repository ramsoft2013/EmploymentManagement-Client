import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component,Input, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  @Input() token: string ;
  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
     this.employees = this.employeeService.getEmployeesList(sessionStorage.getItem('token'));
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id,sessionStorage.getItem('token'))
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
