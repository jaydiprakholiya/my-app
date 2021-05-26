import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {employee} from '../data/employee';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
 @Input() employee?:employee;
 
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  )  { }

  ngOnInit(): void {
   this.getemployee();
  }
  getemployee():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getemployee(id).subscribe(employee=>this.employee=employee);
  }
  goBack(): void {
    this.location.back();
  }
}
