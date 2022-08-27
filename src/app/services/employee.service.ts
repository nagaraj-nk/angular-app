import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import * as Constants from '../utils/constants';
import { Utils } from '../utils/utils';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient, private utils:Utils) { }

  create(employee?:Employee) {
    return this.http.post<any>(Constants.EMPLOYEES, employee, {
      headers: this.utils.httpHeaders()
    });
  }
}
