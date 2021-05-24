import { Component, Input, OnInit } from '@angular/core';
import {employee} from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
 
  @Input() employee?: employee;

  constructor() { }

  ngOnInit(): void {
  }

}
