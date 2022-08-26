import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../model/department';
import * as Constants from '../utils/constants'

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) {}

  getDepartments() {
    return this.http.get<Department[]>(Constants.DEPARTMENTS);
  }

  createDepartment(department: any) {
    return this.http.post<string>(Constants.DEPARTMENTS, department);
  }
}
