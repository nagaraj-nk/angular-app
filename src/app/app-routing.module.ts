import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepartmentComponent } from './components/departments/create-department/create-department.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { FetchDepartmensComponent } from './components/departments/fetch-departmens/fetch-departmens.component';
import { UpdateDepartmentComponent } from './components/departments/update-department/update-department.component';
import { EmployeeDetailsComponent } from './components/employee/employee-details/employee-details.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    redirectTo: '/',
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
    children: [
      {
        path: '',
        component: FetchDepartmensComponent,
      },
      {
        path: 'create',
        component: CreateDepartmentComponent,
      },
      {
        path: 'update',
        component: UpdateDepartmentComponent,
      },
    ],
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailsComponent,
  },
  {
    path: 'search',
    loadChildren: () =>
      import(`./modules/search/search.module`).then((m) => m.SearchModule),
  },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
