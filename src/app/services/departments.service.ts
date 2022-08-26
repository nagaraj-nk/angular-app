import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../model/department';
import * as Constants from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private http: HttpClient) {}

  getDepartments() {
    return this.http.get<Department[]>(Constants.DEPARTMENTS);
  }

  createDepartment(department: any) {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Accept', 'text/plain');
    httpHeaders.set('Content-type', 'application/json');

    return this.http.post<any>(Constants.DEPARTMENTS, department, {
      headers: httpHeaders,
    });
  }
}
