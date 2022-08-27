import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css'],
})
export class CreateDepartmentComponent implements OnInit {
  name: string = '';
  success: string | undefined;
  error: string | undefined;

  constructor(private departmentService: DepartmentsService) {}

  ngOnInit(): void {}

  createDepartment() {
    console.log(this.name);
    const department = {
      name: this.name,
    };

    console.log(department);

    this.departmentService.createDepartment(department).subscribe({
      next: this.onSuccessCreateDepartment.bind(this),
      error: this.handleCreateDepartmentError.bind(this),
    });
  }

  onSuccessCreateDepartment(data: any) {
    this.success = data.message;
  }

  handleCreateDepartmentError(error: any) {
    this.error = 'Something went wrong';
    console.log(error);
  }
}
