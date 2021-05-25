import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';



const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
 
  {path:'detail/:id',component:EmployeeDetailComponent},  
   //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
