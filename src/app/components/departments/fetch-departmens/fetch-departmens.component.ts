import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-fetch-departmens',
  templateUrl: './fetch-departmens.component.html',
  styleUrls: ['./fetch-departmens.component.css']
})
export class FetchDepartmensComponent implements OnInit {

  departments: Department[] | undefined
  constructor(private departmentService: DepartmentsService) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    this.departmentService.getDepartments().subscribe((data: Department[]) => {
      this.departments = data;
    });
  }

}
