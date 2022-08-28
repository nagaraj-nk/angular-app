import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee = new Employee();
  id: any;

  constructor(
    private employeeService: EmployeeService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.fetchEmployeeById(this.id);
  }

  fetchEmployeeById(id: number) {
    this.employeeService.fetchByID(id).subscribe({
      next: this.onSuccessFetchById.bind(this),
      error: this.onErrorFetchById.bind(this),
    });
  }

  onSuccessFetchById(data: Employee) {
    this.employee = data;
  }

  onErrorFetchById() {}
}
