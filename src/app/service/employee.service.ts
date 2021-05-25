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
  getemployee(id: number): Observable<employee> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const employee = EMPLOYEE.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(employee);
  }

  constructor(private messageService:MessageService) { }
}
