import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import * as Constants from '../utils/constants';
import { Utils } from '../utils/utils';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient, private utils: Utils) {}

  create(employee?: Employee) {
    return this.http.post<any>(Constants.EMPLOYEES, employee, {
      headers: this.utils.httpHeaders(),
    });
  }

  fetchByID(id: number) {
    return this.http.get<Employee>(Constants.EMPLOYEES + '/' + id, {
      headers: this.utils.httpHeaders(),
    });
  }

  fetchByPage(page: number) {
    return this.http.get<Employee[]>(Constants.EMPLOYEES_BY_PAGE + '/' + page, {
      headers: this.utils.httpHeaders(),
    });
  }
  
  fetchByRole(role: string) {
    return this.http.get<Employee[]>(Constants.EMPLOYEES_BY_ROLE + '/' + role, {
      headers: this.utils.httpHeaders(),
    });
  }

  delete(employeeId: number) {
    return this.http.delete<any>(Constants.EMPLOYEES + '/' + employeeId, {
      headers: this.utils.httpHeaders(),
    });
  }
}
