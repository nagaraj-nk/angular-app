import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SuccessErrorServiceService } from 'src/app/services/success-error-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private responseService: SuccessErrorServiceService
  ) {}

  ngOnInit(): void {}

  createEmployee() {
    console.log(this.employee);
    this.employeeService.create(this.employee).subscribe({
      next: this.onSuccessCreateEmployee.bind(this),
      error: this.onErrorCreateEmployee.bind(this),
    });
  }

  onSuccessCreateEmployee(data: any) {
    this.responseService.emitData(data);
  }

  onErrorCreateEmployee(error: any) {
    this.responseService.emitData({
      error: 'something went wrong',
    });
  }
}
