import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  constructor(private http:HttpClient) {}
}
