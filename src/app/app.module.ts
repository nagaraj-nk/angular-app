import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { ProductService } from './services/product.service';
import { SearchModule } from './search/search.module';
import { PageHeaderComponent } from './components/ui/page-header/page-header.component';
import { PageFooterComponent } from './components/ui/page-footer/page-footer.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CreateDepartmentComponent } from './components/departments/create-department/create-department.component';
import { UpdateDepartmentComponent } from './components/departments/update-department/update-department.component';
import { FetchDepartmensComponent } from './components/departments/fetch-departmens/fetch-departmens.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { FetchEmployeeComponent } from './components/employee/fetch-employee/fetch-employee.component';
import { SuccessErrorAlertsComponent } from './components/ui/success-error-alerts/success-error-alerts.component';
import { Utils } from './utils/utils';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PageHeaderComponent,
    PageFooterComponent,
    DepartmentsComponent,
    EmployeeComponent,
    CreateDepartmentComponent,
    UpdateDepartmentComponent,
    FetchDepartmensComponent,
    HomeComponent,
    CreateEmployeeComponent,
    FetchEmployeeComponent,
    SuccessErrorAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    ProductService,
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
