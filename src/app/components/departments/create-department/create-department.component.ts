import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department';
import { DepartmentsService } from 'src/app/services/departments.service';
import { SuccessErrorServiceService } from 'src/app/services/success-error-service.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css'],
})
export class CreateDepartmentComponent implements OnInit {
  name: string = '';

  constructor(
    private departmentService: DepartmentsService,
    private response: SuccessErrorServiceService
  ) {

  }

  ngOnInit(): void {
    
  }

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
    console.log('on success: CreateDepartment');
    
    this.response.emitData(data);
  }

  handleCreateDepartmentError(error: any) {
    this.response.emitData({
      'error': 'something went wrong'
    });
  }
}
