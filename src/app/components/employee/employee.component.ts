import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SuccessErrorServiceService } from 'src/app/services/success-error-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[] | undefined;
  adminEmployeeList: Employee[] | undefined;
  currentPage: number = 0;

  constructor(
    private employeeService: EmployeeService,
    private response: SuccessErrorServiceService
  ) {}

  ngOnInit(): void {
    this.fetchEmployeesByPage(this.currentPage);
    this.fetchEmployeeByRole();
  }

  fetchEmployeesByPage(page: number) {
    this.employeeService.fetchByPage(page).subscribe({
      next: this.onSuccessFetchEmployeeByPage.bind(this),
      error: this.onErrorFetchEmployeeByPage.bind(this),
    });
  }

  fetchEmployeeByRole() {
    this.employeeService.fetchByRole('Admin').subscribe({
      next: this.onSuccessFetchEmployeeByRole.bind(this),
      error: this.onErrorFetchEmployeeByPage.bind(this),
    });
  }

  onSuccessFetchEmployeeByRole(data: any) {
    console.log('onSuccessFetchEmployeeByRole: data: '+ data);
    this.adminEmployeeList = data;
  }

  onSuccessFetchEmployeeByPage(data: any) {
    this.employeeList = data;
  }

  onErrorFetchEmployeeByPage(error: any) {
    console.log(error);
  }

  deleteEmployee(employeeId: any) {
    this.employeeService.delete(employeeId).subscribe({
      next: this.onSuccessDeleteEmployee.bind(this),
      error: this.onErrorDeleteEmployee.bind(this),
    });
  }

  onSuccessDeleteEmployee(response: any) {
    this.response.emitData(response);
    this.fetchEmployeesByPage(0);
  }

  onErrorDeleteEmployee(response: any) {
    this.response.emitData(response);
  }

  editEmployee(employeeId: any) {}

  prev() {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
      this.fetchEmployeesByPage(this.currentPage);
    }
  }

  next() {
    if (this.currentPage != -1) {
      this.currentPage = this.currentPage + 1;
      this.fetchEmployeesByPage(this.currentPage);
    }
  }
}
