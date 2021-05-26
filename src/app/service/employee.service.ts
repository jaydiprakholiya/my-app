import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { employee } from '../data/employee';
import {EMPLOYEE} from '../data/moke-employee';
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
  getemployee(id: number): Observable<employee> {
    const employee = EMPLOYEE.find(h => h.id === id)!;
    this.messageService.add(`employee id=${id}`);
    return of(employee);
  }

  constructor(private messageService:MessageService) { }
}
