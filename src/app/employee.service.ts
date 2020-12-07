import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = '/anz';

  constructor(private http: HttpClient) { }

  login(employee: Object): Observable<Object> {
    console.log('user name employee :',employee);
    return this.http.post(`${this.baseUrl}`+'/loginservice/api/v1/login', employee,{responseType:'text' as 'json'}); 
  } 

  getEmployee(id: number, token:any): Observable<Object> {
    let tokenStr='Bearer '+token ;
    const headers=new HttpHeaders().set('Authorization',tokenStr);
    return this.http.get(`${this.baseUrl}`+'/employeeservice/api/v1/admin'+`/${id}`,{headers,responseType:'text' as 'json'});
  }

  createEmployee(employee: Object, token:any): Observable<Object> {
    let tokenStr='Bearer '+token ;
    const headers=new HttpHeaders().set('Authorization',tokenStr);
    return this.http.post(`${this.baseUrl}`+'/employeeservice/api/v1/create', employee,{headers});
  }

  updateEmployee(id: number, value: any, token:any): Observable<Object> {
    let tokenStr='Bearer '+token ;
    const headers=new HttpHeaders().set('Authorization',tokenStr);
    return this.http.put(`${this.baseUrl}`+'/employeeservice/api/v1/admin'+`/${id}`, value,{headers,responseType:'text' as 'json'});
  }

  deleteEmployee(id: number, token:any): Observable<any> {
    let tokenStr='Bearer '+token ;
    const headers=new HttpHeaders().set('Authorization',tokenStr);
    return this.http.delete(`${this.baseUrl}`+'/employeeservice/api/v1/admin'+`/${id}`, {headers,responseType:'text'});
  }

  getEmployeesList(token:any): Observable<any> {
    let tokenStr='Bearer '+token ;
    const headers=new HttpHeaders().set('Authorization',tokenStr);
    return this.http.get(`${this.baseUrl}`+'/employeeservice/api/v1/admin',{headers}); 
    
  }
}
