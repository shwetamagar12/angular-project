import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:[
  
      { path: 'user', component: UserComponent },
      { path: 'employee', component: EmployeeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
