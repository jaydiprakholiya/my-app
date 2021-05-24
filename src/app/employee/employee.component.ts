import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EMPLOYEE } from "../moke-employee";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees = EMPLOYEE;
  selectedemployee?:employee;
  

  // employee:employee= {
  //   id:1,
  //   name:'jaydip'
  // };


  constructor() { }

  ngOnInit(): void {

  }

 
  onSelect(employees:employee):void{this.selectedemployee =employees;}
}


