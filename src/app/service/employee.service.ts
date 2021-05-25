import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { employee } from '../employee';
import {EMPLOYEE} from '../moke-employee';
import { MessageService } from '../service/message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getemployees():Observable<employee[]>{
    const employees = of(EMPLOYEE);
    this.messageService.add('employeeService: fetched employees');
    return employees;
  } 

  constructor(private messageService:MessageService) { }
}
