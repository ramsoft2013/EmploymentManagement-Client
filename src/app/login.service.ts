import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private baseUrl = '/anz';
  //private baseUrl = '/api';

  
  constructor(private http: HttpClient) { }

  

  login(employee: Object): Observable<Object> {
    console.log('user name employee :',employee);
    return this.http.post(`${this.baseUrl}`+'/loginservice/api/v1/login', employee,{responseType:'text' as 'json'}); 
  } 

  getEmployee(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    console.log("base url",this.baseUrl+'/api/getemployee');
    return this.http.post(`${this.baseUrl}`+'/employees', employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'employeeservice/api/v1/search');
  }
}
