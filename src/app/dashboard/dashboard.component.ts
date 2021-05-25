import { Component, OnInit } from '@angular/core';

import { employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees:employee[]=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getemployees();
  }
  getemployees():void{
    this.employeeService.getemployees().subscribe(employees=>this.employees=employees.slice(1,5));
  }
}
