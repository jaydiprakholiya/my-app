import { Component, OnInit } from '@angular/core';
import { employee } from '../data/employee';
import { EmployeeService } from '../service/employee.service';
import { MessageService } from '../service/message.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  selectedemployee?:employee;

  employees : employee[] = [];
  
  constructor(private employeeService:EmployeeService,private messageService:MessageService) { }

  ngOnInit() {
    this.getemployee();

  }
  // onSelect(employee:employee):void{
  //   this.selectedemployee = employee;
  //   this.messageService.add(` Selected employee id=${employee.id}`);
  // }

  getemployee() : void {
   this.employeeService.getemployees().subscribe(employees=>this.employees = employees);
  }
}